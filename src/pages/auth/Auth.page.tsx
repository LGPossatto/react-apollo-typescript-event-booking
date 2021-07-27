import { useRef, useState, useContext } from "react";

import userContext from "../../context/user/userContext";

import "./auth.style.scss";
import { clearError, showError } from "../../assets/scripts/utils.script";
import loginQuery from "../../graphql/queries/login.query";
import createUserMutation from "../../graphql/mutations/createUser.mutation";

const Auth = () => {
  const { loginUser } = useContext(userContext);
  const [isLogin, setIsLogin] = useState(true);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const errordRef = useRef<HTMLDivElement>(null);

  const handleLogin = async (
    email: string,
    password: string,
    isLogin: boolean
  ) => {
    const fetchLogin = async () => {
      const data = await loginQuery(email, password);
      if (data.errors) {
        showError(errordRef, data.errors[0].message);
      } else {
        loginUser(data.data.login);
      }
    };

    if (isLogin) {
      fetchLogin();
    } else {
      const data = await createUserMutation(email, password);
      if (data.errors) {
        showError(errordRef, "Email already registered!");
      } else if (data.data.createUser) {
        fetchLogin();
      }
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    clearError(errordRef);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      handleLogin(email, password, isLogin);
    } else {
      showError(errordRef, "Please leave no enpty field!");
    }
  };

  return (
    <form className="auth-form">
      <div className="error-component fs-small fc-danger" ref={errordRef}></div>
      <div className="input-component">
        <label htmlFor="email" className="fs-med">
          E-Mail
        </label>
        <input type="email" id="email" className="fs-med" ref={emailRef} />
      </div>
      <div className="input-component">
        <label htmlFor="password" className="fs-med">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="fs-med"
          ref={passwordRef}
        />
      </div>
      <div className="form-actions flex flex-fd-c jc-c ai-c">
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn-component fs-med fc-light"
        >
          {isLogin ? "Login" : "Sing Up"}
        </button>
        <button
          onClick={() => setIsLogin(!isLogin)}
          type="button"
          className="btn-sign fs-small fc-primary"
        >
          {isLogin ? "Sing Up" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default Auth;
