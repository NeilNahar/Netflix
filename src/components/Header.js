import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearchShow } from '../utils/aiSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const aiButton = useSelector((state) => state.ai.searchShow);
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsbscribe();
    };
  }, []);
  const Signout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout successful");
      })
      .catch((error) => {
        console.log("Error Occured");
      });
  };
  return (
    <div className="absolute z-10 w-full flex justify-between py-5 px-16 bg-gradient-to-b from-black">
      <p className="text-red-500 text-3xl">StreamSmart</p>
      {user && (
        <div className="flex gap-5 text-white">
          <button className="bg-neutral-700 px-2 rounded-md text-xs" onClick={()=>{dispatch(toggleSearchShow())}}>{aiButton?"Home" : "AI Search"}</button>
          <span className="border-2 border-slate-100 flex justify-center items-center rounded-xl px-2 text-xs ">
            {user.displayName}
          </span>
          <button
            className="bg-red-500 px-2 rounded-md text-xs"
            onClick={Signout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
