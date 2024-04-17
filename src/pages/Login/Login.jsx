import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative w-full h-[700px] md:h-[970px] ">
      <img
        className="h-full w-full absolute"
        src="https://img.freepik.com/free-vector/abstract-neon-background-desktop-wallpaper-vector_53876-135925.jpg?t=st=1712953432~exp=1712957032~hmac=9bfdd2cc3b8bafd4cd1b997d7e104f6750dd2beaf98594d165fbb1513dfa2472&w=826"
        alt=""
      />

      <div className="pt-32">
        <div
          className="card shrink-0 w-full max-w-sm drop-shadow-3xl
backdrop-blur-sm bg-[#ffffff27] shadow-xl border border-[#ffffffa4] mx-auto "
        >
          <form className="card-body text-white">
            <h1 className="text-5xl font-medium text-[#ffffff] text-center mb-7">
              Login
            </h1>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input bg-transparent border-[#ffffff70] border  placeholder-white mb-3"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input bg-transparent border-[#ffffff70] border  placeholder-white"
                required
              />
              <label className="mt-2">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white "
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {/* or login with google  */}
            <div className=" flex mt-3">
              {/* <div className="border border-r-white"></div>    */}
              <p className="text-center">or login with</p>
              {/* <div className="border-y-white border"></div> */}
            </div>
            <span className="flex justify-center gap-5 mt-5 text-3xl">
              <FcGoogle />
              <FaGithub />
            </span>

            <div className="form-control mt-4">
              <button className="btn bg-white border-none text-black  ">
                Login
              </button>
            </div>

            <p className="text-white text-base">
              Don't have an account?
              <Link to={"/register"}>
                <button className="btn btn-link text-white text-base m-0 p-2">
                  Register
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
