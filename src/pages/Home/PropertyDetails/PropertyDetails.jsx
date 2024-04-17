import { useLoaderData, useParams } from "react-router-dom";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { PiBathtubBold } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-8 md:max-w-6xl mx-5 md:mx-6 lg:mx-auto mt-32">
      <div className="md:col-span-2">
        <div className="flex justify-between mb-5">
          <div>
            <h2 className="font-bold md:text-3xl">{estate_title}</h2>
            <p className="flex items-center gap-1 md:text-xl mt-2">
              <IoLocationOutline className="text-lg font-medium" />
              {location}
            </p>
          </div>
          <p className="font-bold md:text-3xl">{price}</p>
        </div>
        <div className="flex justify-between">
          <span className="px-3 py-1 bg-[#242425d6] text-white rounded text-sm mb-2">
            <span className="mr-1">For</span>
            {status}
          </span>
        </div>
        <img className="w-full md:h-auto rounded" src={image} alt="" />

        {/* overview */}
        <div className="shadow-md bg-[#eae5ff35] p-5 mt-8 mb-4 rounded">
          <p className="font-bold text-lg md:text-xl mt-8 mb-4">Overview</p>
          <hr />

          <div className="flex flex-col lg:flex-row space-y-5 my-4 justify-between mb-10">
            <p className="font-medium">
              {segment_name}
              <p className="font-normal">Property Type</p>
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
            <p className="flex items-center gap-2">
              <IoLocationOutline className="text-lg font-medium" />
              {location}
            </p>
          </div>
        </div>

        {/* description */}
        <div className="shadow-md bg-[#eae5ff35] p-8 mt-8 mb-4 rounded">
          <p className="mt-8 mb-4 font-bold text-lg md:text-xl">Description</p>
          <hr />
          <p className="mt-4">{description}</p>
        </div>

        {/* features */}
        <div className="shadow-md bg-[#eae5ff35] p-8 mt-8 mb-4 rounded">
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

      <div className="shadow-md bg-[#eae5ff35] p-8 mt-8 mb-4 rounded h-auto text-center">
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
