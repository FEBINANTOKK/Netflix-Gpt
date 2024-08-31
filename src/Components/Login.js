import React, { useState } from "react";
import { Header } from "./Header";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);

  const toggleSigninForm = () => {
    setIsSignin(!isSignin);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute top-32 bg-black  w-3/12 text-white  px-9 py-12 mx-auto left-0 right-0  bg-opacity-80 ">
        <h2 className=" pb-4 font-bold">{isSignin ? "SIGN IN" : "SIGN UP"} </h2>
        <div className=" flex flex-col gap-6">
          {!isSignin && (
            <input
              type="text "
              placeholder=" Name"
              className=" px-2 2 py-1 rounded-sm bg-gray-800 text-gray-100 border border-gray-500"
            />
          )}
          <input
            type="text "
            placeholder=" Email"
            className=" px-2 2 py-1 rounded-sm bg-gray-800 text-gray-100 border border-gray-500"
          />
          <input
            type="password "
            placeholder=" Password"
            className="  px-2 py-1 rounded-sm bg-gray-800 text-gray-100 border border-gray-500"
          />
          <button className="bg-red-600 text-white px-3 py-1 rounded-lg">
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
    </div>
  );
};

export default Login;
