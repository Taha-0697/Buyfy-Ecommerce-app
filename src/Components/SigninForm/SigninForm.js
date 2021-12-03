import React, { useState } from "react";
import { connect } from "react-redux";
import { signin } from "../../Redux/auth/authActions";

const SigninForm = ({ signin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubimt = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    const cred = {
      email,
      password,
    };
    signin(cred);
  };
  return (
    <div>
    <h3>Sign-In</h3>
      <form onSubmit={handleFormSubimt}>
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const actions = {
  signin,
};

export default connect(null, actions)(SigninForm);
