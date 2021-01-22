import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "./firebase";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [FireInitialized, setFireInitialized] = useState(false);
  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFireInitialized(val);
    });
  }, []);
  return (
    <div className="container">
      {FireInitialized !== false ? (
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      ) : (
        <>
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="light" />
        </>
      )}
    </div>
  );
}
