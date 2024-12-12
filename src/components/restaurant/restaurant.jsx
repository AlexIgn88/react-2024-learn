import { restaurantTitle, tabs, restaurantTab } from "./restaurant.module.scss";
import NavigationTab from "../navigation-tab/navigation-tab.jsx";
import { Outlet } from "react-router-dom";

const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return;
  }

  return (
    <>
      <h2 className={restaurantTitle}>{restaurant.name}</h2>
      <div className={tabs}>
        <NavigationTab path="menu" styleClass={restaurantTab} title="Меню" />
        <NavigationTab
          path="reviews"
          styleClass={restaurantTab}
          title="Отзывы"
        />
      </div>
      <Outlet />
    </>
  );
};

export default Restaurant;
