import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Root = () => {
  return (
    <div className="h-16">
      <Navbar className="w-full"></Navbar>
      <div className="md:max-w-6xl mx-5 md:mx-6 lg:mx-auto min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
