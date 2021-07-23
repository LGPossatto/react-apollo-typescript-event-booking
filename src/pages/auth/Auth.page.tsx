import { useRef, useState } from "react";

import "./auth.style.scss";
import loginQuery from "../../graphql/queries/loginQuery";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const errordRef = useRef<HTMLDivElement>(null);

  const showError = (msg: string) => {
    errordRef.current!.innerText = msg;
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      if (isLogin) {
        console.log("login");
        const data = await loginQuery(email, password);
        console.log(data);
      } else {
        console.log("sign up");
      }
    } else {
      showError("Please leave no enpty field!");
    }
  };

  return (
    <form className="auth-form">
      <div className="form-error fs-small fc-danger" ref={errordRef}></div>
      <div className="form-control">
        <label htmlFor="email" className="fs-med">
          E-Mail
        </label>
        <input type="email" id="email" className="fs-med" ref={emailRef} />
      </div>
      <div className="form-control">
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
          className="btn-login fs-med fc-light"
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
