const OurServices = () => {
  return (
    <section className="py-12">
      <div className="w-full mx-auto text-center">
        <h2
          className="text-3xl font-semibold text-gray-800 mb-6"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Service Card 1 */}
          <div
            className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Home Buying
            </h3>
            <p className="text-gray-600">
              We help you find the perfect home that fits your needs and budget.
              Our experts guide you through the entire buying process.
            </p>
          </div>

          {/* Service Card 2 */}
          <div
            className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Home Selling
            </h3>
            <p className="text-gray-600">
              Looking to sell your property? We offer comprehensive services to
              market and sell your home efficiently.
            </p>
          </div>

          {/* Service Card 3 */}
          <div
            className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Real Estate Investment
            </h3>
            <p className="text-gray-600">
              Our team provides expert advice for real estate investments,
              helping you make informed decisions to maximize returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
