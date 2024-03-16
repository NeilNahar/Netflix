import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user)
  const Signout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout successful");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error Occured");
      });
  };
  return (
    <div className="absolute z-10 w-full flex justify-between p-5 bg-gradient-to-b from-black">
      <p className="text-red-500 text-3xl">StreamSmart</p>
      {user && (
        <div className="flex gap-5 text-white">
          <span className="flex justify-center items-center rounded-xl px-2 text-xs bg-slate-400">
            {user.displayName}
          </span>
          <button className="bg-red-500 px-2 rounded-md text-xs" onClick={Signout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
