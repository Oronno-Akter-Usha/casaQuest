import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="mt-20 mx-5">
      <Helmet>
        <title>Casa Quest-Contact page</title>
        <link rel="" href="/" />
      </Helmet>
      {/* <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2> */}

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Contact Us</h1>
            <p className="py-6 text-center">contact us today!</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name=""
                  id=""
                  className="border p-4 rounded w-full max-w-xs"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#5d0af7] text-white">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
