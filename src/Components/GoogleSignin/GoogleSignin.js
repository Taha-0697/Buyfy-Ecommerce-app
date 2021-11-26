import React from "react";
import { connect } from "react-redux";
import { googleSignin } from "../../Redux/auth/authActions";

const GoogleSignin = ({ googleSignin }) => {
  return (
    <div>
      <button onClick={googleSignin}>Sign-in with Google</button>
    </div>
  );
};

const actions = {
  googleSignin,
};

export default connect(null, actions)(GoogleSignin);
