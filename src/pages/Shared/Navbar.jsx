import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "font-bold mr-10" : "mr-10")}
      >
        Home
      </NavLink>

      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "font-bold mr-10" : "mr-10")}
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "font-bold mr-10" : "mr-10")}
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div
      className="navbar drop-shadow-xl sticky top-0 
      backdrop-blur-sm bg-[#4e08cfbd] shadow-xl z-10 text-white mb-[100px]"
    >
      <div className="mr-12">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 text-white"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Casa Quest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white ">{navLink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
