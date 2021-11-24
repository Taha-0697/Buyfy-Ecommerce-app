import React from "react";
import { auth } from "../../Firebase/Firebase";

const Home = () => {
  console.log(auth, "auth from firebase");
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
