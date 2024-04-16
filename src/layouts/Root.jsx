import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

const Root = () => {
  return (
    <div className="">
      <Navbar className="w-full"></Navbar>
      <div className="md:max-w-6xl mx-5 md:mx-6 lg:mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
