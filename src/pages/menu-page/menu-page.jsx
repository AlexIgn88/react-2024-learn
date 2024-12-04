import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import Menu from "../../components/menu/menu.jsx";

const MenuPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { menu } = restaurant;

  return <Menu menu={menu} />;
};

export default MenuPage;
