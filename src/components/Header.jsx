import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="flex fixed px-4 md:px-12 py-2 md:py-4 bg-gradient-to-b from-black via-black/40 to-transparent w-full z-50 justify-between items-center transition-all duration-300 backdrop-blur-[2px]">
      <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={() => navigate("/")}>
        <div className="relative">
          <img
            className="w-10 md:w-16 filter brightness-110 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-500 group-hover:rotate-[360deg]"
            src={LOGO}
            alt="logo"
          />
        </div>
      </div>
      {user && (
        <div className="flex p-1 md:p-2 items-center">
          <button className="py-1 md:py-2 text-white bg-purple-800 px-2 md:px-4 rounded-lg text-xs md:text-base mr-2" onClick={handleGptSearchClick}>GPT Search</button>
          {user?.photoURL ? (
            <img
              className="hidden md:block w-10 md:w-12 h-10 md:h-12 m-2 rounded-md object-cover border border-white/20"
              alt="usericon"
              src={user?.photoURL}
            />
          ) : (
            <div className="w-10 h-10 md:w-11 md:h-11 m-2 rounded-md bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg border border-white/20">
              {user?.displayName ? user.displayName.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
          <button
            onClick={handleSignOut}
            className="p-1 md:p-2 font-bold bg-red-600 rounded-lg text-white bg-opacity-80 text-xs md:text-base"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
