import { useState } from "react";
import { auth } from "../config/firebase";
import { SignOutButton } from "./auth/SignOutButton";

const Home = ({user}) => {

  return (
    <div>
      <h1>Welcome to the home page, {user.userName}</h1>
      <SignOutButton />
    </div>
  );
};

export default Home;
