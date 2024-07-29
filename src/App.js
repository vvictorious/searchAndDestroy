import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { auth, db } from "./config/firebase";
import PrivateRoute from "./components/navigation/PrivateRoute";
import SignIn from "./components/auth/SignIn";
import { SignUpAndSignIn } from "./components/auth/SignUpAndSignIn";
import Home from "./components/Home";
import ForgotPassword from "./components/auth/ForgotPassword";

import {
  getDoc,
  doc
} from "firebase/firestore";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)

  console.log(user)

  const getUser = async () => {
    try {
      const currentUser = auth?.currentUser;
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data());
        } else {
          console.error("No such document!");
        }
      }
    } catch (err) {
      console.error("Error getting user document:", err);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isSignedIn && !user) {
      console.log('fired getUser')
      getUser()
    } else {
      return
    }
  }, [isSignedIn, user])

  console.log('isSignedIn', isSignedIn)

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/signUp" element={<SignUpAndSignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/home" element={<PrivateRoute isSignedIn={isSignedIn}><Home user={user} /></PrivateRoute>} />
        <Route path="/" element={isSignedIn ? <Navigate to="/home" /> : <Navigate to="/signIn" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// needed routes signup and sign in
// sign in
// forgot password
// waiting for a game session screen (this may not bee needed for mvp)
// home when logged in and game is in session
// level 1-4 challeenges so four screens but they are basically all the same
