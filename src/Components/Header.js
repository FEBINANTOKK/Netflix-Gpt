import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO_MENU, PHOTO_URL } from "../Utils/Constants";

export const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        // ...

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: PHOTO_URL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component Unmound
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 z-50 flex justify-between items-center ">
      <img className="w-44" src={LOGO_MENU} alt="logo " />

      {user && (
        <div
          className="flex
         gap-3 items-center"
        >
          <img className="w-7 h-7" src={user.photoURL} alt="userPro" />

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
