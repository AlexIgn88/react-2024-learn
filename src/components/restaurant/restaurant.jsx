import { restaurantTitle, tabs, restaurantTab } from "./restaurant.module.scss";
import NavigationTab from "../navigation-tab/navigation-tab.jsx";

const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return;
  }
  const { id, name } = restaurant;

  return (
    <>
      <h2 className={restaurantTitle}>{name}</h2>
      <div className={tabs}>
        <NavigationTab
          path={`/restaurants/${id}/menu`}
          styleClass={restaurantTab}
          title="Меню"
        />
        <NavigationTab
          path={`/restaurants/${id}/reviews`}
          styleClass={restaurantTab}
          title="Отзывы"
        />
      </div>
    </>
  );
};

export default Restaurant;
