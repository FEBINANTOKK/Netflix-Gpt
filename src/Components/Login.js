import React, { useState, useRef } from "react";
import { Header } from "./Header";

import { checkValidate } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_URL, PHOTO_URL } from "../Utils/Constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignin, setIsSignin] = useState(true);

  const [errorMessage, setErroeMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErroeMessage(message);
    //Signin or signup

    if (message) return;

    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,

            photoURL: PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // ...

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
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErroeMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in

          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const toggleSigninForm = () => {
    setIsSignin(!isSignin);
  };
  return (
    <div>
      <Header />
      <div>
        <img className="h-[100vh] w-[100vw]" src={BG_URL} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-40 top-32 bg-black  w-3/12 text-white  px-9 py-12 mx-auto left-0 right-0  bg-opacity-75 "
      >
        <h2 className=" pb-4 font-bold">{isSignin ? "SIGN IN" : "SIGN UP"} </h2>
        <div className=" flex flex-col gap-6">
          {!isSignin && (
            <input
              ref={name}
              type="text "
              placeholder=" Name"
              className=" px-2 2 py-1 rounded-sm bg-gray-800 text-gray-100 border border-gray-500"
            />
          )}
          <input
            ref={email}
            type="text "
            placeholder=" Email"
            className=" px-2 2 py-1 rounded-sm bg-gray-800 text-gray-100 border border-gray-500"
          />
          <input
            ref={password}
            type="password"
            placeholder=" Password"
            className="  px-2 py-1 rounded-sm bg-gray-800 text-gray-100 border border-gray-500"
          />

          <p className=" text-red-500 text-center font-bold">{errorMessage}</p>
          <button
            className="bg-red-600 text-white px-3 py-1 rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignin ? "Sign in" : "Sign up"}
          </button>
        </div>
        <p
          className=" py-7 text-center cursor-pointer"
          onClick={toggleSigninForm}
        >
          {" "}
          {isSignin
            ? "NEW to Netflix ? Sign UP Now"
            : "Already Have an Account"}
        </p>
      </form>

      <div className="absolute top-0 z-30 w-[100vw] h-[100vh] bg-black bg-opacity-40 "></div>
    </div>
  );
};

export default Login;
