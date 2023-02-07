import "./Login-Form.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import axios from "../../../Api/axios";
const LOGIN_URL = "/login";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setData((prev) => ({ ...prev, [id]: value }));
  }

  const createAccount = async () => {
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ ...data }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(response.data);
      console.log(JSON.stringify(response));
    } catch (error) {
      if (!error?.response) {
        console.log("No Server response");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <section className="login-container">
      <form className="login-form">
        {/* login title */}
        <h2 className="login-title">welcome Back!</h2>
        <p className="login-error">incorrect password or email</p>

        {/* email input section  */}
        <div className="input-wrapper">
          <label htmlFor="email">Email Address</label>
          <div className="login-input">
            <input
              onChange={handleChange}
              className="login-email"
              type="email"
              id="email"
              placeholder="Email..."
              value={data.email}
              required
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>

        {/* password input section */}
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <div className="login-input">
            <input
              onChange={handleChange}
              className="login-pwd"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password..."
              value={data.password}
              required
              spellCheck={false}
              autoComplete="off"
            />
            {showPassword ? (
              <i
                onClick={() => setShowPassword((prev) => !prev)}
                className="fa-solid fa-eye viewPwd"></i>
            ) : (
              <i
                onClick={() => setShowPassword((prev) => !prev)}
                className="fa-solid fa-eye-slash viewPwd"></i>
            )}
          </div>
        </div>

        {/* button section  */}

        <button className="btn-login dark--btn btn--Login">Log in</button>
        <span>Forgot your password?</span>
        <div className="signup">
          <span className="Signup-text">Not a member yet?</span>
          <Link to="/sign-up" className="btn-login colored--btn btn--signup">
            Sign up
          </Link>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
