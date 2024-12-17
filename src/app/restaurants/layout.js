import IsAuthorized from "../../components/is-authorized/is-authorized.js";
import RestaurantsTabsContainer from "../../components/restaurants-tabs-container/restaurants-tabs-container.jsx";
import { Suspense } from "react";
import Loader from "../../components/loader/loader.jsx";

const LayoutRestaurantsPage = ({ children }) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RestaurantsTabsContainer />
      </Suspense>
      <main>{children}</main>
      <IsAuthorized />
    </>
  );
};

export default LayoutRestaurantsPage;
