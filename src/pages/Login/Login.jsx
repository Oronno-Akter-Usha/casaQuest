import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // sign in user in firebase
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
        toast.success("Successfully Login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          <form onSubmit={handleLogin} className="card-body text-white">
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input bg-transparent border-[#ffffff70] border  placeholder-white"
                required
              />
              <span
                className="absolute top-[200px] right-12"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <label className="mt-2">
              <a
                href="#"
                className="label-text-alt link link-hover text-white "
              >
                Forgot password?
              </a>
            </label>

            <div className="form-control mt-4">
              <button className="btn bg-white border-none text-black  ">
                Login
              </button>
            </div>
          </form>

          <span className="flex justify-center gap-5 mt-2 text-3xl">
            <button onClick={() => googleLogin()}>
              <FcGoogle />
            </button>
            <button onClick={() => githubLogin()}>
              <FaGithub />
            </button>
          </span>

          <p className="text-white text-base text-center mb-4">
            Don't have an account?
            <Link to={"/register"}>
              <button className="btn btn-link text-white text-base m-0 p-2">
                Register
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
