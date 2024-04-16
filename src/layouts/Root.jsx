import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Casa Quest</h1>
      <button className="btn">Button</button>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
