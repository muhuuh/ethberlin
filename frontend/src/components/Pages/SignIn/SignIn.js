// Slide 1 & 2: Title, logo & signup button + hen clicked, the interface for the wallet sigm up
import { useState } from "react";
import SignInForm2 from "./SignInForm2";
import { Link } from "react-router-dom";


const SignIn = () => {
  const [isExistingUser, setIsExistingUser] = useState();

  const isExistingUserHandler = () => {
    setIsExistingUser(true);
  };

  const notExistingUserHandler = () => {
    setIsExistingUser(false);
    
  };

  return (
    <div className="text-center ">
      <h1 className="text-3xl font-bold mb-16 mt-36">Deasy</h1>
      <p className="text-xl font-bold mb-16">
        Your Blockchain learning journey starts here
      </p>
      <div className="flex flex-row justify-around">
        <button onClick={isExistingUserHandler} className="bg-brownRed text-white text-center text-lg border-2 shadow-lg rounded-full border-white hover:font-bold hover:scale-110 py-4 w-48">Login Email</button>
        <button onClick={isExistingUserHandler} className="bg-yellowOcre text-white text-center text-lg border-2 shadow-lg rounded-full border-white hover:font-bold hover:scale-110 py-4 w-48">Connect wallet</button>
        <Link onClick={notExistingUserHandler} to="/signup" className="bg-gray-500 text-white text-center text-lg border-2 shadow-lg rounded-full border-white hover:font-bold hover:scale-110 py-4 w-48">Sign up</Link>
      </div>
    </div>
  );
};

export default SignIn;
