import { auth } from "../config/firebase";
import { SignOutButton
	
 } from "./auth/SignOutButton";
const Home = () => {
  console.log(auth);

  return (
    <div>
			<h1>Home baby!</h1>
			<SignOutButton />
    </div>
  );
};

export default Home;
