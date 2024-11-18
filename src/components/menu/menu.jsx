import Dish from "../dish/dish.jsx";

const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default Menu;
