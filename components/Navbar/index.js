import React from "react";
import Navlink from "./Navlink";
import Dropdown from "./Dropdown";

function classNames(...args) {
  return args.filter(Boolean).join(" ");
}

function Navbar({className}) {
  return (
    <div className={classNames("flex flex-row justify-around py-6", className)}>
      <div className="flex flex-row flex-1 justify-center items-center">
        <span className="text-4xl tracking-widest animate-bounce font-monoton text-white shadow-lg">
        Threadrop
        </span>
      </div>
      <div className="flex flex-row flex-1 justify-center items-center">
        <Navlink>Contact</Navlink>
        
        <Dropdown>Our Services</Dropdown>
        <Navlink>About Us</Navlink>
      </div>
      <div className="flex flex-row flex-1 justify-center items-center align-center">
        <Navlink className="bg-green-500">Sign up</Navlink>
        <Navlink>Login</Navlink>
      </div>
    </div>
  );
}

export default Navbar;
