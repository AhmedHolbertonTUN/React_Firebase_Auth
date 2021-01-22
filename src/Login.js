import React, { useState } from "react";
import "./styles.css";
import firebase from "./firebase";
import { withRouter } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin() {
    try {
      await firebase.login(email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="circle"></div>
            <header className="myHed text-center">
              <i className="far fa-user"></i>
              <p>LOGIN</p>
            </header>
            <form className="main-form text-center">
              <div className="form-group my-0">
                <label className="my-0">
                  <i className="fas fa-envelope-open	"></i>
                  <input
                    type="email"
                    className="myInput"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>

              <div className="form-group my-0">
                <label>
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    className="myInput"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <label className="check_1">
                <input type="checkbox" checked /> Remember Me
              </label>

              <div className="form-group">
                <label>
                  <input
                    type="button"
                    className="form-control button"
                    value="LOGIN"
                    onClick={onLogin}
                  />
                </label>
              </div>
              <span className="check_1">
                Don't have an account ?{" "}
                <a href="/register">
                  <strong>Register here</strong>
                </a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
