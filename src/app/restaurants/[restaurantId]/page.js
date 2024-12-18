import { getRestaurantById } from "../../../services/get-restaurant-by-id.js";

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;
  const restaurant = await getRestaurantById(restaurantId);
  const { name } = restaurant;

  return {
    title: name,
  };
};

export const generateStaticParams = async () => {
  return [
    { restaurantId: "bb8afbec-2fec-491f-93e9-7f13950dd80b" },
    { restaurantId: "d9241927-09e1-44f3-8986-a76346869037" },
  ];
};

export default () => null;
