// import { useSelector } from "react-redux";
// import { selectRestaurantDishes } from "../../redux/entities/dishes/dishes-slice.js";
import { menuTitle, tabs, menuTab } from "./menu.module.scss";
import NavigationTab from "../navigation-tab/navigation-tab.jsx";

const Menu = ({ menu }) => {
  // const restaurantDishes = useSelector((state) =>
  //   selectRestaurantDishes(state, menu),
  // );

  return (
    <div>
      <h3 className={menuTitle}>Меню</h3>
      <div className={tabs}>
        {menu.map(({ id, name }) => (
          <NavigationTab
            key={id}
            path={`/dish/${id}`}
            title={name}
            styleClass={menuTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
