import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, setDoc, doc } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUpAndSignIn = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("")

  const navigate = useNavigate();

  console.log(auth);

  const signIn = async () => {
    if (!email || !passWord || !userName) {
      setError("All fields are required.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, passWord);
      const user = userCredential.user;
      // off top, I need to add a privacy policy field
      // probably going to neeed a whole bunch of other stuff too
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        userName: userName,
        createdAt: new Date()
      });
      navigate("/home");
    } catch (err) {
      console.error("Error signing up: ", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
      />
      <input
        value={passWord}
        onChange={(e) => setPassWord(e.target.value)}
        placeholder="Password"
        // type="password"
        required
      />
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
        type="text"
        required
      />
      <button onClick={signIn}>Sign Up And Sign In</button>
      <button onClick={() => navigate("/forgotPassword")}>
        ForgotPassword
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
