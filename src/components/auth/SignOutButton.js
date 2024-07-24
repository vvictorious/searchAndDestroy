import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

export const SignOutButton = () => {
  const signOutOfCurrentSession = async () => {
    try {
			await signOut(auth)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={signOutOfCurrentSession}>Sign Out</button>
    </div>
  );
};
