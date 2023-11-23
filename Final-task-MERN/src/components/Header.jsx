import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Login from "../components/Login";

export default function Header() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const auth = JSON.parse(localStorage.getItem("user"));

  const openLoginDialog = () => {
    setShowLogin(true);
  };

  const closeLoginDialog = () => {
    setShowLogin(false);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <header className="shadow z-60 top-0">
      <nav className="bg-gradient-to-r from-gray-500 via-white-800 to-gray-500 border-b-2 border-black-600 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="/Images/logo.png" className="mr-3 h-11" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            {auth ? (
              <>
                <Link
                  to="/login"
                  className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300"
                  onClick={logout}
                >
                  Logout
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-900 bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-2 lg:px-5 py-1.5  mr-2 focus:outline-none transition-all duration-300"
                >
                  {auth.name}
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300"
                  onClick={openLoginDialog}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300"
                  onClick={openLoginDialog}
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black-600" : "text-white"
                    } hover:text-blue-300 lg-p-0 transition-all duration-300`
                  }
                >
                  Home
                </NavLink>
              </li>
              {auth ? (
                <>
                  <li>
                    <NavLink
                      to="/items"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-black-600" : "text-white"
                        } hover:text-blue-300 lg-p-0 transition-all duration-300`
                      }
                    >
                      Today's Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/add"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-black-600" : "text-white"
                        } hover:text-blue-300 lg-p-0 transition-all duration-300`
                      }
                    >
                      Sell Items
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-black-600" : "text-white"
                        } hover:text-blue-300 lg-p-0 transition-all duration-300`
                      }
                    >
                      Today's Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-black-600" : "text-white"
                        } hover:text-blue-300 lg-p-0 transition-all duration-300`
                      }
                    >
                      Sell Items
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {showLogin && <Login onClose={closeLoginDialog} />}
    </header>
  );
}
