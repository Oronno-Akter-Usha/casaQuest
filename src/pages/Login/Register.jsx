import { Link } from "react-router-dom";

const Register = () => {
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
            <form className="card-body text-white">
              <h1 className="text-5xl font-medium text-[#ffffff] text-center mb-7">
                Register
              </h1>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input bg-transparent border-[#ffffff70] border  placeholder-white mb-3"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input bg-transparent border-[#ffffff70] border  placeholder-white mb-3"
                  required
                />
              </div>
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
              </div>

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
