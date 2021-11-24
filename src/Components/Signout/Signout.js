import React from "react";
import { connect } from "react-redux";
import { signout } from "../../Redux/auth/authActions";

const Signout = ({ signout }) => {
  return (
    <div>
      <button onClick={signout}>SignOut</button>
    </div>
  );
};

const actions = {
  signout,
};

export default connect(null, actions)(Signout);
