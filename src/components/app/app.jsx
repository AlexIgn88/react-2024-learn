import { restaurants } from "../../../materials/mock.js";
import Layout from "../layout/layout.jsx";
import Restaurant from "../restaurant/restaurant.jsx";
import { useCallback, useState } from "react";

const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  const handlerRestaurantChange = useCallback(
    (restaurant) => {
      if (restaurant.id !== activeRestaurant.id)
        setActiveRestaurant(restaurant);
    },
    [activeRestaurant.id],
  );

  return (
    <Layout onRestaurantChange={handlerRestaurantChange}>
      <Restaurant restaurant={activeRestaurant} />
    </Layout>
  );
};

export default App;
