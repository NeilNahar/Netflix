import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [login,setLogin]=useState(true)
  return (
    <div>
      <Header />
      <img
        className="w-screen h-fit brightness-50"
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="backgroundImage"
      />
      <form className="absolute top-44 left-0 right-0 mx-auto w-96 flex flex-col gap-6 py-8 px-16 bg-black bg-opacity-60 text-white rounded-md">
        <label className="text-[2rem] font-semibold rounded-md">{login ? "Sign In" : "Sign Up"}</label>
        {!login && <input type="text" placeholder="Full Name" className="p-2 bg-slate-700 rounded-md bg-opacity-60" />}
        <input type="email" placeholder="Email" className="p-2 bg-slate-700 rounded-md bg-opacity-60" />
        <input type="password" placeholder="Password" className="p-2 bg-slate-700 rounded-md bg-opacity-60" />
        <button className="bg-red-600 py-1.5 px-2 rounded-md">{login ? "Sign In" : "Sign Up"}</button>
        <p className="cursor-pointer" onClick={()=>{setLogin(!login)}}>{login ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}</p>
      </form>
    </div>
  );
};
export default Login;
