import { useParams } from "react-router-dom";
import Menu from "../../components/menu/menu.jsx";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api/index.js";
import LoadErrorDisplay from "../../components/load-error-display/load-error-display.jsx";

const MenuPage = () => {
  const { restaurantId } = useParams();
  const { data, isLoading, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  return (
    <LoadErrorDisplay data={data} isLoading={isLoading} isError={isError}>
      <Menu menu={data} />
    </LoadErrorDisplay>
  );
};

export default MenuPage;
