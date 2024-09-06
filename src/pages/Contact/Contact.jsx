import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="mt-20 mx-5 md:mx-10 lg:mx-20">
      <Helmet>
        <title>CasaQuest - Contact Us</title>
        <link rel="canonical" href="/contact" />
      </Helmet>

      {/* Header Section */}
      <section className="text-center my-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          We are here to assist you. Reach out to us today!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="md:flex md:justify-center my-12">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#4e08cfbd] text-white py-2 px-4 rounded-lg "
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="my-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Feel free to reach out to us via email or phone. We are here to
            help!
          </p>
        </div>
        <div className="w-full my-auto flex flex-col md:flex-row md:justify-evenly md:gap-8 ">
          <div className="w-full md:w-2/5 mt-8 md:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Email:</strong> contact@casaquest.com
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Phone:</strong> +1-XXX-XXX-XXXX
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Office Hours:</strong>
              <br />
              Monday – Friday: 9 AM – 6 PM
              <br />
              Saturday: 10 AM – 2 PM
              <br />
              Sunday: Closed
            </p>
          </div>
          <div className="w-full md:w-2/5">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Office Location
            </h3>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.509146788601!2d-122.41941808468127!3d37.77492927975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b54e4e6d9%3A0x3bfc0e1fc58d5e36!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1650466371431!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
