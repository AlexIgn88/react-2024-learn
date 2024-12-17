"use client";

import Restaurant from "../../../components/restaurant/restaurant.jsx";
import { useParams } from "next/navigation";
import { useGetRestaurantByIdQuery } from "../../../redux/services/api/index.js";
import LoadErrorDisplay from "../../../components/load-error-display/load-error-display.jsx";

const LayoutRestaurantPage = ({ children }) => {
  const { restaurantId } = useParams();

  const { data, isLoading, isError } = useGetRestaurantByIdQuery(restaurantId);

  return (
    <>
      <LoadErrorDisplay data={data} isLoading={isLoading} isError={isError}>
        <Restaurant restaurant={data} />
      </LoadErrorDisplay>
      {children}
    </>
  );
};

export default LayoutRestaurantPage;
