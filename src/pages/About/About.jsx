import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="mt-20 mx-5 md:mx-10 lg:mx-20">
      {/* Helmet for page title and metadata */}
      <Helmet>
        <title>CasaQuest - About Us</title>
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Header Section */}
      <section className="text-center my-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Us
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Discover more about CasaQuest and our journey to helping you find your
          dream home.
        </p>
      </section>

      {/* Main Content Section */}
      <section className="md:flex items-center my-12 md:my-20">
        {/* Image section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="CasaQuest Team"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Text content */}
        <div className="md:w-1/2 md:pl-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            At CasaQuest, we believe that finding the perfect home is not just
            about square footage and amenities; it is about discovering a place
            where memories are made, dreams are realized, and lives are
            enriched. With a passion for real estate and a commitment to
            exceptional service, CasaQuest is your dedicated partner on the
            journey to finding your ideal residence.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-gray-100 p-8 rounded-lg my-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our Vision & Mission
          </h3>
          <p className="text-gray-600 text-lg">
            CasaQuest is built on values of integrity, transparency, and client
            satisfaction.
          </p>
        </div>
        <div className="md:flex justify-around text-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold text-gray-800">Our Vision</h4>
            <p className="text-gray-700 mt-2">
              To revolutionize the real estate experience, making it seamless
              and enjoyable for everyone, ensuring that every client finds their
              perfect home.
            </p>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-xl font-semibold text-gray-800">Our Mission</h4>
            <p className="text-gray-700 mt-2">
              To provide personalized guidance and expert advice, ensuring that
              our clients are empowered to make the best decisions for their
              future.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-12">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700">
              CasaQuest helped us find our dream home. The process was smooth,
              and their team was incredibly helpful!
            </p>
            <p className="mt-4 text-gray-800 font-semibold">- John Doe</p>
          </div>
          {/* Testimonial 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700">
              The team at CasaQuest was always available to answer our questions
              and made the home buying process stress-free.
            </p>
            <p className="mt-4 text-gray-800 font-semibold">- Jane Smith</p>
          </div>
          {/* Testimonial 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700">
              We could not be happier with our new home, thanks to CasaQuest
              expertise and dedication.
            </p>
            <p className="mt-4 text-gray-800 font-semibold">- Sarah Lee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
