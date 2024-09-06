const Testimonial = () => {
  return (
    <div>
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

export default Testimonial;
