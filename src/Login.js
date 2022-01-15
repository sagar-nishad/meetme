import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";
import { Helmet } from "react-helmet";
import "./Login.css";
import Background from "./Background";
// import "./canva";

function Login(props) {
  const [{}, dispatch] = useStateValue();
  const singIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      localStorage.setItem('isauth',1)
      localStorage.setItem('Name', result.user.displayName)
      console.log(localStorage.getItem('Name'))
      dispatch({ type: actionTypes.SET_USER, user: result.user });
    });
  };
  // console.log("Login->user >>>",user)
  return (
    <div className="login_container">
      <div className="login_buttonContainer">
        <h2>Login With Google</h2>
        <Button
          className="login_btn btn btn-primary"
          variant="outlined"
          size="large"
          onClick={singIn}
        >
          <img
            className="login__ButtonImg"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
          />
          Login
        </Button>
      </div>
      <Background />
    </div>
  );
}

export default Login;
