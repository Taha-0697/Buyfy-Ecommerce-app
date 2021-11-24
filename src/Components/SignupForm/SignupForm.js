import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../Redux/auth/authActions";

const SignupForm = ({ signup }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubimt = (e) => {
    e.preventDefault();
    // console.log(fullname);
    // console.log(email);
    // console.log(password);
    const cred = {
      fullname,
      email,
      password,
    };
    signup(cred);
  };
  return (
    <div>
      <form onSubmit={handleFormSubimt}>
        <input
          value={fullname}
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullname(e.target.value)}
        />

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
  signup,
};

export default connect(null, actions)(SignupForm);
