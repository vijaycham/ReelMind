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
    <div className="flex fixed px-12 py-4 bg-gradient-to-b from-black via-black/40 to-transparent w-full z-10 justify-between items-center transition-all duration-300 backdrop-blur-[2px]">
      <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate("/")}>
        <div className="relative">
          <img
            className="w-14 md:w-16 filter brightness-110 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-500 group-hover:rotate-[360deg]"
            src={LOGO}
            alt="logo"
          />
        </div>
      </div>
      {user && (
        <div className="flex p-2 items-center ">
          <button className="py-2 text-white bg-purple-800 px-4 rounded-lg" onClick={handleGptSearchClick}>GPT Search</button>
          <img
            className="w-12 h-12 m-3 rounded-md"
            alt="usericon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="p-3 my-8 font-bold bg-red-600 rounded-lg justify-between text-white bg-opacity-80"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
