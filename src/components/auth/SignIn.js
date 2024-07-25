import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={() => navigate("/signUp")}>Sign Up</button>
    </div>
  );
}

export default SignIn;
