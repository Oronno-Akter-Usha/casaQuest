import toast from "react-hot-toast";

const getStoredWishlistProperty = () => {
  const storedProperty = localStorage.getItem("properties");
  if (storedProperty) {
    return JSON.parse(storedProperty);
  }
  return [];
};

const saveWishlistProperty = (id) => {
  const storedProperties = getStoredWishlistProperty();

  const exists = storedProperties.find((pId) => pId === id);
  if (exists) {
    return toast.error("You already add this property");
  }
  storedProperties.push(id);
  localStorage.setItem("properties", JSON.stringify(storedProperties));
  toast.success("Property Added to Wish List");
};

export { getStoredWishlistProperty, saveWishlistProperty };
