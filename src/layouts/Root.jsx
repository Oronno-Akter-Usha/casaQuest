import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Root = () => {
  return (
    <div className="h-16">
      <Navbar className="w-full"></Navbar>
      <div className="mx-5 md:mx-6 lg:mx-auto min-h-[calc(100vh-120px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
