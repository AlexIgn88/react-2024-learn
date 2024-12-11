// import { useSelector } from "react-redux";
// import { selectRestaurantMenu } from "../../redux/entities/restaurants/restaurants-slice.js";
// import { useRequest } from "../../redux/hooks/use-request.js";
// import { getRestaurantMenu } from "../../redux/entities/restaurants/get-restaurant-menu.js";
import { useParams } from "react-router-dom";
import Menu from "../../components/menu/menu.jsx";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api/index.js";
import LoadErrorDisplay from "../../components/load-error-display/load-error-display.jsx";

const MenuPage = () => {
  const { restaurantId } = useParams();
  const { data, isLoading, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  // const requestStatusRestaurantMenu = useRequest(
  //   getRestaurantMenu,
  //   restaurantId,
  // );
  // const menu = useSelector((state) =>
  //   selectRestaurantMenu(state, restaurantId),
  // );
  //

  return (
    <LoadErrorDisplay data={data} isLoading={isLoading} isError={isError}>
      <Menu menu={data} />
    </LoadErrorDisplay>
  );
};

export default MenuPage;
