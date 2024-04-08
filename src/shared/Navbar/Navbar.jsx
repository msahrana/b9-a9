import {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/profile"
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/userProfile"
        >
          User Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? "bg-red-500 text-white" : "")}
          to="/aboutUs"
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Elysian Estates
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex">
            <div>
              <img className="size-10 rounded-full" src={user?.photoURL} />
            </div>
            <p className="mx-2 p-2 rounded">{user?.displayName}</p>
            <p className="mx-2 p-2 rounded">{user?.email}</p>
            <button
              onClick={handleLogOut}
              className="bg-red-500 px-2 py-1 rounded-lg text-white"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-red-500 px-2 py-1 rounded-lg text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
