import React from "react";
import { Logo } from "../assets";
import { Footer } from "../containers";
import { AuthButton } from "../components";
import { FaGoogle, FaGithub } from "react-icons/fa";
const Authentication = () => {
  return (
    <div className="auth-section">
      <img src={Logo} alt="" className="w-12 h-auto object-contain" />
      <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
        <h1 className="text-3xl lg:text-4xl text-blue-600">
          Welcome to Build Resume
        </h1>
        <p className="text-base text-gray-600">create your resume easily</p>
        <h2 className="text-2xl text-gray-600">Authenticate</h2>
        <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
          <AuthButton
            Icon={FaGoogle}
            label={"Signin with Google"}
            provider={"GoogleAuthProvider"}
          />
          <AuthButton
            Icon={FaGithub}
            label={"Signin with GitHub"}
            provider={"GitAuthProvider"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Authentication;
