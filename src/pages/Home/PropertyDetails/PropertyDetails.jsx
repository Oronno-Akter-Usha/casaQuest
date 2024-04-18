import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { PiBathtubBold } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { saveWishlistProperty } from "../../../utility/localstorage";

const PropertyDetails = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const property = properties.find((property) => property.id === idInt);

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    features,
    bedroom,
    bathroom,
    image,
  } = property;

  const handleWishlist = () => {
    saveWishlistProperty(idInt);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-8 md:max-w-6xl mx-5 md:mx-6 lg:mx-auto mt-32">
      <Helmet>
        <title>Casa Quest-PropertyDetails page</title>
        <link rel="" href="/" />
      </Helmet>
      <div className="md:col-span-2">
        <div className="flex justify-between mb-5">
          <div>
            <h2
              className="font-bold md:text-3xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {estate_title}
            </h2>
            <p
              className="flex items-center gap-1 md:text-xl mt-2"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <IoLocationOutline className="text-lg font-medium" />
              {location}
            </p>
          </div>
          <p
            className="font-bold md:text-3xl"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {price}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="px-3 py-1 bg-[#242425d6] text-white rounded text-sm mb-2">
              <span className="mr-1">For</span>
              {status}
            </span>
          </div>

          <Link to={""} data-aos="fade-left" data-aos-duration="2000">
            <button
              onClick={handleWishlist}
              className="btn px-5 bg-[#7a42ff] text-white hover:text-[#7a42ff] mb-5"
            >
              Add Wishlist
            </button>
          </Link>
        </div>
        <img
          className="w-full md:h-auto rounded"
          src={image}
          alt=""
          data-aos="fade-up"
          data-aos-duration="2000"
        />

        {/* overview */}
        <div
          className="shadow-md bg-[#eae5ff35] p-5 mt-8 mb-4 rounded"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="font-bold text-lg md:text-xl mt-8 mb-4">Overview</p>
          <hr />

          <div className=" space-y-5 my-4  mb-10">
            <p className="font-medium">
              {segment_name}
              <span className="font-normal ml-4">(property type)</span>
            </p>
            <p className="flex items-center gap-2">
              <IoLocationOutline className="text-lg font-medium" />
              {location}
            </p>
            <div className="flex justify-items-start gap-12">
              <p className="flex items-center gap-2">
                <IoBedOutline className="text-lg font-medium" />
                {bedroom}
              </p>

              <p className="flex items-center gap-2">
                <PiBathtubBold className="text-lg font-medium" />
                {bathroom}
              </p>
              <p className="flex items-center gap-2">
                <TbRulerMeasure className="text-lg font-medium" />
                {area}
              </p>
            </div>
          </div>
        </div>

        {/* description */}
        <div
          className="shadow-md bg-[#eae5ff35] p-8 mt-8 mb-4 rounded"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="mt-8 mb-4 font-bold text-lg md:text-xl">Description</p>
          <hr />
          <p className="mt-4">{description}</p>
        </div>

        {/* features */}
        <div
          className="shadow-md bg-[#eae5ff35] p-8 mt-8 mb-4 rounded"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="mt-8 mb-4 font-bold text-lg md:text-xl">Features</p>
          <hr />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between mt-4">
            {features.map((feature, i) => (
              <>
                <div className="flex gap-3 items-center">
                  <FaRegCheckCircle />

                  <li key={i}>{feature}</li>
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>

      {/* schedule  */}

      <div
        className="shadow-md bg-[#eae5ff35] p-8 mt-8 mb-4 rounded h-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <h2 className="text-2xl font-bold mb-5">Schedule a Tour</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Phone"
            className="input input-bordered w-full max-w-xs"
          />
          <input type="date" className="input input-bordered w-full max-w-xs" />
          <textarea
            name=""
            id=""
            className="border p-4 rounded w-full max-w-xs"
            placeholder="Message"
          ></textarea>
          <button className="w-full btn bg-[#7a42ff] text-white max-w-xs">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
