import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 z-50 flex justify-between items-center ">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo "
      />

      {user && (
        <div>
          <button
            className="bg-red-600 px-3 py-1 rounded-md text-white"
            onClick={handleClick}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
