import { useAmount } from "../../hooks/useAmount.jsx";
import { dishStyle, quantityStyle } from "./dish.module.scss";

const Dish = ({ dish }) => {
  const { amount, decrease, increase } = useAmount(0);

  return (
    <div className={dishStyle}>
      <h4>{dish.name}</h4>
      <h4>Цена: {dish.price} руб.</h4>
      <div className={quantityStyle}>
        Выбрано: {amount}
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
      <div>
        {dish.ingredients.map((ingredient) => (
          <span key={ingredient}>{ingredient}</span>
        ))}
      </div>
    </div>
  );
};

export default Dish;
