import Dish from "../dish/dish.jsx";
import { menuTitle } from "./menu.module.scss";

const Menu = ({ menu }) => {
  return (
    <div>
      <h3 className={menuTitle}>Меню</h3>
      {menu.map((dish) => (
        <Dish key={dish} dishId={dish} />
      ))}
    </div>
  );
};

export default Menu;
