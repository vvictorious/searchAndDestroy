import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUpAndSignIn = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const navigate = useNavigate();

	console.log(auth)

	const signIn = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, passWord)
      navigate("/home");
		} catch (err) {
			console.error(err)
		}
	}

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={passWord}
        onChange={(e) => setPassWord(e.target.value)}
        placeholder="Password"
      />
			<button onClick={signIn}>Sign Up And Sign In</button>
      <button onClick={() => navigate("/forgotPassword")}>ForgotPassword</button>
    </div>
  );
};
