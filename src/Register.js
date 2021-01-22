import React, { useState } from "react";
import { Alert } from "reactstrap";
import "./styles.css";
import firebase from "./firebase";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistred, setisRegistred] = useState(false);

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      setisRegistred(true);
      setEmail("");
      setName("");
      setPassword("");
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
              <p>SIGN UP</p>
            </header>
            <form className="main-form text-center">
              <div className="form-group my-0">
                <label className="my-0">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    className="myInput"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group my-0">
                <label className="my-0">
                  <i className="fas fa-envelope-open"></i>
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
                    value="REGISTER"
                    onClick={onRegister}
                  />
                </label>
              </div>
            </form>
            {isRegistred ? (
              <Alert color="success" style={{ marginTop: "15px" }}>
                Successfully registered !{"  "}
                <a href="/login" className="alert-link">
                  Login
                </a>
              </Alert>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
