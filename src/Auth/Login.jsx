import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import logo from "../assets/Images/GA.png";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
    } catch (error) {
      setErrorMessage(error.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setIsAuthenticated(true);
    } catch (error) {
      setErrorMessage(error.message || "Google sign-in failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setErrorMessage("Please enter your email to reset password.");
      return;
    }
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      setErrorMessage(
        error.code === "auth/user-not-found"
          ? "No user found with this email."
          : "Failed to send reset email."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f7fafc] relative">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 bg-black opacity-30 flex justify-center items-center z-50">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-4"></div>
            <span className="text-white text-lg animate-pulse">Loading...</span>
          </div>
        </div>
      )}

      {/* Login Form */}
      <div className="p-8 bg-white shadow-lg rounded-lg w-96 text-center relative z-10">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-20 mx-auto mb-4" />

        <h2 className="text-3xl font-bold text-gray-700 mb-6">
          Student <span className="text-blue-800">Portal</span>
        </h2>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}

        <input
          type="email"
          placeholder="Username or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-3 border border-gray-300 rounded-lg"
        />

        <div className="text-right mb-4">
          <button
            onClick={handleForgotPassword}
            className="text-black text-sm hover:text-blue-800 "
          >
            Forgot password?
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Login;
