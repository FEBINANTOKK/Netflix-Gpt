import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO_MENU, PHOTO_URL, SUPPORTED_LANGUAGE } from "../Utils/Constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLang } from "../Utils/config";
export const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.shoeGptSearch);
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

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 z-50 flex justify-between items-center ">
      <img className="w-44" src={LOGO_MENU} alt="logo " />

      {user && (
        <div
          className="flex
         gap-3 items-center"
        >
          {showGptSearch && (
            <select
              className="rounded-2xl bg-violet-900 text-white px-3 py-1"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((SUPPORTED_LANGUAGE) => (
                <option
                  key={SUPPORTED_LANGUAGE.name}
                  value={SUPPORTED_LANGUAGE.identifier}
                >
                  {SUPPORTED_LANGUAGE.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 rounded-lg m-2 bg-violet-900 text-white"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home Page" : "Gpt Search"}
          </button>
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
