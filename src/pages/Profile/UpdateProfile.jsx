import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="md:max-w-6xl mx-5 md:mx-6 lg:mx-auto mt-24">
      <h2 className="text-center md:text-3xl font-bold">Update Profile</h2>

      <img
        className="rounded-full mx-auto mt-5"
        src={
          user?.photoURL ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCJpmc7wNF8Ti2Tuh_hcIRZUGOc23KBTx2A&s"
        }
      />
      <h2 className="text-lg text-center font-semibold mt-5">
        Name: {user?.displayName}
      </h2>
      <h2 className="text-lg text-center font-semibold mt-2">
        Email: {user?.email}
      </h2>

      <form
        action=""
        className="flex flex-col justify-center items-center mt-6 md:w-1/4 mx-auto"
      >
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs mx-auto"
        />
        <br />
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full max-w-xs mx-auto"
        />
        <button className="btn w-full bg-[#7a42ff] text-white hover:text-[#7a42ff] my-5">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
