import { useRef } from "react";

import "./auth.style.scss";

const Auth = () => {
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

    const requestBody = {
      query: `
        query {
          login(userInput: {
            email: "${email}",
            password: "${password}"
        }){
          userId
          token
          tokenExpiration
        }
      }`,
    };

    if (email && password) {
      const res = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      console.log(data);
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
          Login
        </button>
        <button
          onClick={() => null}
          type="button"
          className="btn-sign fs-small fc-primary"
        >
          Sing Up
        </button>
      </div>
    </form>
  );
};

export default Auth;
