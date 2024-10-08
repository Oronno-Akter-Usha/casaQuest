import { useLoaderData } from "react-router-dom";
import PropertiesCard from "./PropertiesCard";

const Properties = () => {
  const properties = useLoaderData();
  console.log(properties);
  return (
    <div className="py-16">
      <h2
        className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-center"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        Popular Properties
      </h2>
      <p
        className="mb-12 md:text-base text-center"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        These are our popular properties
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((data) => (
          <PropertiesCard key={data.id} data={data}></PropertiesCard>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn bg-[#7a42ff] text-white mt-10 ">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Properties;
