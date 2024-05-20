import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const AuthButton = ({ Icon, label, provider }) => {
  const googleAuthprovider = new GoogleAuthProvider();
  const gtAuthProvider = new GithubAuthProvider();
  const handleClick = async () => {};
  return (
    <div
      onClick={handleClick}
      className="w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-600 active:scale-95 duration-150 hover:shadow-md"
    >
      <Icon className="text-gray-600 text-xl group-hover:text-white" />
      <p className="text-gray-600 text-xl group-hover:text-white">{label}</p>
      <FaChevronRight className="text-gray-600 text-base group-hover:text-white" />
    </div>
  );
};

export default AuthButton;
