import React, { useState, useRef } from "react";
import { Header } from "./Header";

import { checkValidate } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
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
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              // ...

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
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

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode + "_" + errorMessage);
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
        <img
          className="h-[100vh] w-[100vw]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="bg"
        />
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
