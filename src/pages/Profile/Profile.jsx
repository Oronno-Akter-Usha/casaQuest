import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="md:max-w-6xl mx-5 md:mx-6 lg:mx-auto mt-24">
      {/* <h2 className="text-center md:text-3xl font-bold">Profile</h2> */}

      <img
        className="rounded-full mx-auto"
        src={
          user?.photoURL ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCJpmc7wNF8Ti2Tuh_hcIRZUGOc23KBTx2A&s"
        }
      />
      <h2 className="text-lg text-center font-semibold mt-5">
        Name: {user?.displayName}
      </h2>
      <h2 className="text-lg text-center font-semibold mt-5">
        Email: {user?.email}
      </h2>
    </div>
  );
};

export default Profile;
