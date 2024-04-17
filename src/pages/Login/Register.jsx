import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const from = "/";
  const onSubmit = (data) => {
    const { email, password, photo, name } = data;
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case charecters"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one lower case charecters"
      );
      return;
    }

    //create user and update profile
    createUser(email, password).then(() => {
      toast.success("Successfully Register");
      updateUserProfile(name, photo).then(() => {
        navigate(from);
      });
    });
  };

  return (
    <div>
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body text-white"
            >
              <h1 className="text-5xl font-medium text-[#ffffff] text-center mb-7">
                Register
              </h1>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input bg-transparent border-[#ffffff70] border  placeholder-white mb-3"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input bg-transparent border-[#ffffff70] border  placeholder-white mb-3"
                  {...register("photo")}
                />
              </div>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input bg-transparent border-[#ffffff70] border  placeholder-white mb-3"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input bg-transparent border-[#ffffff70] border  placeholder-white"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute top-[335px] right-12"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {registerError && <p className="text-white">{registerError}</p>}

              <div className="form-control mt-4">
                <button className="text-[#100130] bg-white px-5 py-2 rounded font-medium">
                  Register
                </button>
              </div>

              <p className="text-white text-base">
                Already have an account?
                <Link to={"/login"}>
                  <button className="btn btn-link text-white m-0 p-1 text-base">
                    Login
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
