import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Properties from "./Properties/Properties";
import OurServices from "./OurServices/OurServices";
import Testimonial from "../Shared/Testimonial";

const Home = () => {
  return (
    <div className="md:max-w-6xl mx-5 md:mx-6 lg:mx-auto mt-24">
      <Helmet>
        <title>Casa Quest</title>
        <link rel="" href="/" />
      </Helmet>
      <Banner />
      <Properties />
      <OurServices />

      <Testimonial />

      {/* Call-to-Action Section */}
      <section className="py-12 text-center my-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our team is here to help you every step of the way. Contact us today
          to get started.
        </p>
        <a
          href="/contact"
          className="btn bg-[#4e08cfbd] text-white px-6 py-3 rounded-lg shadow-md"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Home;
