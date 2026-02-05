import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/Context";

const Login = () => {
  const { login } = use(AuthContext);
  const [error, seterror] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    // ------------login fire base set--------------------
    login(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        seterror(errorCode);
      });
  };
  return (
    <div className="card bg-base-100 w-full mt-[100px] mb-5 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="text-2xl font-bold">Login your account</h3>
        <form onSubmit={handleLogin} className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input bg-base-200"
            placeholder="Email"
            name="email"
            required
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input bg-base-200"
            placeholder="Password"
            name="password"
            required
          />
          {/* forgot password */}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          {/* error set */}
          {
            error && 
            <p className="text-red-600 text-xm">{error}</p> 
          }
          {/* button */}
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          {/* link */}
          <p className="mt-5 font-boldr">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
