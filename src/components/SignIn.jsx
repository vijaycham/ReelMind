import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import Footer from "./Footer";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";

    const message = checkValidateData(emailValue, passwordValue);
    SetErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: null,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          SetErrorMessage(getFriendlyErrorMessage(errorCode));
        });
    } else {
      // sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          SetErrorMessage(getFriendlyErrorMessage(errorCode));
        });
    }
  };

  const getFriendlyErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "User not found. Please check your email or Sign Up.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/invalid-credential":
        return "Invalid email or password. Please try again.";
      case "auth/email-already-in-use":
        return "Email already in use. Try signing in.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/invalid-email":
        return "Invalid email address format.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/network-request-failed":
        return "Network error. Please check your connection.";
      case "auth/invalid-api-key":
      case "auth/api-key-not-found":
      case "auth/configuration-not-found":
        return "System configuration error. Please try again later.";
      default:
        return "Authentication failed. Please try again.";
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="fixed inset-0 z-[-1]">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <div className="flex-grow flex items-center justify-center py-24 md:py-32 px-4 shadow-inner">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-[450px] p-8 md:p-16 bg-black text-white bg-opacity-80 rounded-xl shadow-2xl border border-gray-800 text-sm md:text-base z-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold py-2 md:py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 md:p-4 my-2 md:my-4 w-full bg-[#333] bg-opacity-70 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition-all"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 md:p-4 my-2 md:my-3 w-full bg-[#333] bg-opacity-70 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition-all"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 md:p-4 my-2 md:my-3 w-full text-white bg-[#333] bg-opacity-70 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition-all"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="p-3 my-4 md:my-8 font-bold bg-red-600 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p>
            {isSignIn ? "New to ReelMind?  " : "Already a Member. "}

            <span
              className="font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignIn ? "Sign Up now" : "Sign In now"}
            </span>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
