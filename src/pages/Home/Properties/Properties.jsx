import { useLoaderData } from "react-router-dom";
import PropertiesCard from "./PropertiesCard";

const Properties = () => {
  const properties = useLoaderData();
  console.log(properties);
  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-4">Popular Properties</h2>
      <p className="mb-12">These are our popular properties</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((data) => (
          <PropertiesCard key={data.id} data={data}></PropertiesCard>
        ))}
      </div>
    </div>
  );
};

export default Properties;
