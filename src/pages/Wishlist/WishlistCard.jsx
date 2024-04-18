import { IoBedOutline } from "react-icons/io5";
import { PiBathtubBold } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const WishlistCard = ({ wishlist }) => {
  const {
    id,
    estate_title,
    segment_name,
    price,
    status,
    area,
    bedroom,
    bathroom,
    image,
  } = wishlist;
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="card shadow-xl">
        <figure>
          <img className="h-[256px] w-full" src={image} alt="house" />
          <span className="absolute px-5 py-2 z-[1] bg-[#242425e6] text-white top-0 right-0 rounded-sm">
            <p className="text-sm">For {status}</p>
          </span>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{estate_title} </h2>
          <p>{segment_name}</p>

          <div className="flex justify-between my-4">
            <p className="flex items-center gap-2 text-lg">
              <IoBedOutline className="text-lg font-medium" />
              {bedroom}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <PiBathtubBold className="text-lg font-medium" />
              {bathroom}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <TbRulerMeasure className="text-lg font-medium" />
              {area}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-xl">{price}</p>
            <Link to={`/property/${id}`}>
              <button className="btn px-5 bg-[#7a42ff] text-white hover:text-[#7a42ff]">
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

WishlistCard.propTypes = {
  wishlist: PropTypes.array,
};

export default WishlistCard;
