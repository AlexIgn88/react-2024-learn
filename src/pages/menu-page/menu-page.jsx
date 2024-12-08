import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantMenu } from "../../redux/entities/restaurants/restaurants-slice.js";
import Menu from "../../components/menu/menu.jsx";
import { useRequest } from "../../redux/hooks/use-request.js";
import { getRestaurantMenu } from "../../redux/entities/restaurants/get-restaurant-menu.js";
import Loader from "../../components/loader/loader.jsx";
import DownloadError from "../../components/download-error/download-error.jsx";

const MenuPage = () => {
  const { restaurantId } = useParams();
  const requestStatusRestaurantMenu = useRequest(
    getRestaurantMenu,
    restaurantId,
  );

  const menu = useSelector((state) =>
    selectRestaurantMenu(state, restaurantId),
  );

  if (requestStatusRestaurantMenu === "pending") {
    return <Loader />;
  }
  if (requestStatusRestaurantMenu === "rejected") {
    return <DownloadError />;
  }
  if (!menu) return;

  return <Menu menu={menu} />;
};

export default MenuPage;
