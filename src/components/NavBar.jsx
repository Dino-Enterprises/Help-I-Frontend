import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-[#323232] text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <div className="text-2xl font-bold font-serif">Help-I</div>
          </Link>
        </div>
        {/* Center */}
        <div className="flex grow"></div>
        {/* Right */}
        <div className="text-xl font-bold flex absolute-right m-4">
          <Link to={"/login"}>
            <div className="mr-5">Login</div>
          </Link>
          <Link to={"/register"}>
            <div className="mr-5">Register</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
