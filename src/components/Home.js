import { SignOutButton } from "./auth/SignOutButton";

const Home = ({user, setUser}) => {

  return (
    <div>
      <h1>Welcome to the home page, {user?.userName}</h1>
      <SignOutButton setUser={setUser} />
    </div>
  );
};

export default Home;
