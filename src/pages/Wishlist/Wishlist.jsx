import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistProperty } from "../../utility/localstorage";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const [wishlistProperties, setWishlistProperties] = useState([]);

  const properties = useLoaderData();
  useEffect(() => {
    const storedWishlistIds = getStoredWishlistProperty();
    if (properties.length > 0) {
      const wishListProperty = properties.filter((wishlist) =>
        storedWishlistIds.includes(wishlist.id)
      );
      console.log(wishlistProperties, wishListProperty);
      setWishlistProperties(wishListProperty);
    }
  }, []);
  return (
    <div className="md:max-w-6xl mx-5 md:mx-6 lg:mx-auto my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistProperties.map((wishlist) => (
          <WishlistCard key={wishlist.id} wishlist={wishlist}></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
