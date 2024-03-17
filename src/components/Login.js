import { useRef, useState } from "react";
import Header from "./Header";
import FormValidation from "../utils/FormValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const Validate = (e) => {
    const check = FormValidation(email.current.value, password.current.value);
    setError(check);
    if (check) return;
    if (!login) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = user;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setError("Error Registering User");
            });
        })
        .catch((error) => {
          setError("Error Registering User");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
        })
        .catch((error) => {
          setError("Invalid Credentials");
        });
    }
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <img
        className="absolute top-0 w-screen h-screen brightness-50"
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="backgroundImage"
      />
      <form className="absolute top-44 left-0 right-0 mx-auto w-96 flex flex-col gap-6 py-8 px-16 bg-black bg-opacity-60 text-white rounded-md">
        <label className="text-[2rem] font-semibold rounded-md">
          {login ? "Sign In" : "Sign Up"}
        </label>
        {!login && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 bg-slate-700 rounded-md bg-opacity-60"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-2 bg-slate-700 rounded-md bg-opacity-60"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 bg-slate-700 rounded-md bg-opacity-60"
        />
        {error !== null && <p className="text-red-600">{error}</p>}
        <button
          className="bg-red-600 py-1.5 px-2 rounded-md"
          onClick={Validate}
        >
          {login ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer"
          onClick={() => {
            setLogin(!login);
          }}
        >
          {login
            ? "New to StreamSmart? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
