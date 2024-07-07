import React from "react";
import logo from "../assets/images/logo.svg";

const Header = () => (
  <header className="flex flex-nowrap items-center p-4 bg-white justify-start w-full gap-12 font-medium">
    <div className="logo-container flex items-center gap-2">
      <h1 className="text-2xl font-bold">JobNavigator</h1>
    </div>
    <nav className="navigation-pill flex flex-row justify-end items-center gap-4 w-9/12">
      <h1 className="text-lg font-semibold p-2">Home</h1>
      <h1 className="text-lg font-semibold p-2">FAQ</h1>
      <h1 className="text-lg font-semibold p-2">Solutions</h1>
    </nav>
    <div className="header-auth h-8 justify-start items-center gap-3 inline-flex">
      <button
        type="button"
        className=" p-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-dark focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Sign In
      </button>

      <button className=" inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className=" p-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Register!
        </span>
      </button>
    </div>
  </header>
);

export default Header;
