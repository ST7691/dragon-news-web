import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../Provider/Context";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user);
// --------------handlelogOut----------------------
const handlelogOut = ()=>{
 logOut().then(() => {
  alert('your logged successfully')
}).catch((error) => {
alert(error)
});
}
  // links
  const links = (
    <>
      <li className="text-accent">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-accent">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-accent">
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          {/* user email set  */}
          <div className="">{user && user.email}</div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
       <img className="w-12 rounded-full" src={`${user ? user.photoURL : userIcon}`} alt="" />
        {user ? (
          <button onClick={handlelogOut} className="btn btn-primary px-10">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
