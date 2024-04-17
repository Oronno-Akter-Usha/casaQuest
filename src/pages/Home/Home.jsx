import Banner from "./Banner/Banner";
import Properties from "./Properties/Properties";

const Home = () => {
  return (
    <div className="md:max-w-6xl mx-5 md:mx-6 lg:mx-auto mt-24">
      <Banner></Banner>
      <Properties></Properties>
    </div>
  );
};

export default Home;
