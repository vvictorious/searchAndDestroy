import { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./config/firebase";
import { SignIn } from "./components/auth/Auth";
import { SignOutButton } from "./components/auth/SignOutButton";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsSignedIn(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      Search and Destroy
      {!isSignedIn && <SignIn />}
      {isSignedIn && <SignOutButton />}
    </div>
  );
}

export default App;
