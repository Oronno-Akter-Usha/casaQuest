import { Link, NavLink } from "react-router-dom";

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
    <div className="relative">
      <div
        className="navbar w-full drop-shadow-xl fixed top-0 
      backdrop-blur-sm bg-[#4e08cfbd] shadow-xl z-10 text-white "
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 text-white bg-[#4e08cfbd]"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Casa Quest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white ">{navLink}</ul>
        </div>

        {/* login  */}
        <div className="navbar-end md:mr-5 w-full">
          <Link to={"/login"}>
            <button className="text-[#100130] bg-white px-5 py-1 rounded font-medium">
              Login
            </button>
          </Link>
          {/* <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Update Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
