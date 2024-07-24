import { useState } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

	console.log(auth)

	const signIn = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, passWord)
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
			<button onClick={signIn}>Sign In</button>
    </div>
  );
};
