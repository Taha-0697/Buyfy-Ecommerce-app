import React from "react";
import SigninForm from "../../Components/SigninForm/SigninForm";
import Signout from "../../Components/Signout/Signout";
import SignupForm from "../../Components/SignupForm/SignupForm";

const Authentcation = () => {
  return (
    <div>
      <h1>Authentcation Page</h1>
      <SignupForm />
      <SigninForm />
      <Signout/>
    </div>
  );
};

export default Authentcation;
