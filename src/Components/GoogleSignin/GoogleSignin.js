import React from "react";
import { connect } from "react-redux";
import { googleSignin } from "../../Redux/auth/authActions";

const GoogleSignin = ({ googleSignin }) => {
  return (
    <div>
    <h3>Sign-In With Google</h3>
      <button onClick={googleSignin}>Sign-in with Google</button>
    </div>
  );
};

const actions = {
  googleSignin,
};

export default connect(null, actions)(GoogleSignin);
