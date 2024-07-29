import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

export const SignOutButton = ({setUser}) => {
  const signOutOfCurrentSession = async () => {
    try {
			await signOut(auth)
      setUser(null)
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
