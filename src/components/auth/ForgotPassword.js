import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleGoBack = () => {
    navigate(-1); // This will navigate back to the previous route
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent!");
      setError("");
    } catch (error) {
      console.error("Error sending password reset email: ", error);
      setError(
        "Error sending password reset email. Please check the email address and try again."
      );
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button onClick={handleForgotPassword}>Send Password Reset Email</button>
      {message && <p>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
			<button onClick={handleGoBack}>Back</button>
    </div>
  );
}

export default ForgotPassword;
