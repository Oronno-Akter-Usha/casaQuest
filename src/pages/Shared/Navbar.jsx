import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

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

      <NavLink
        to={"/wishList"}
        className={({ isActive }) => (isActive ? "font-bold mr-10" : "mr-10")}
      >
        Wishlist Properties
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
          <a className="btn btn-ghost text-xl md:text-2xl mr-10">Casa Quest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white ">{navLink}</ul>
        </div>

        {/* login  */}
        <div className="navbar-end md:mr-5 w-full">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-10 rounded-full ">
                  <img
                    src={
                      user?.photoURL ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCJpmc7wNF8Ti2Tuh_hcIRZUGOc23KBTx2A&s"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm ">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button onClick={logout} className="btn btn-sm ">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="text-[#100130] bg-white px-5 py-1 rounded font-medium">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
