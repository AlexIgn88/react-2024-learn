import { useState } from "react";
import { dishStyle, quantityStyle } from "./dish.module.scss";

const Dish = ({ dish }) => {
  const [quantity, setQuantity] = useState(0);

  const decreaseHandler = () => setQuantity(quantity > 0 ? quantity - 1 : 0);
  const increaseHandler = () =>
    setQuantity(quantity <= 4 ? quantity + 1 : quantity);

  return (
    <div className={dishStyle}>
      <h4>{dish.name}</h4>
      <h4>Цена: {dish.price} руб.</h4>
      <div className={quantityStyle}>
        Выбрано: {quantity}
        <button onClick={decreaseHandler}>-</button>
        <button onClick={increaseHandler}>+</button>
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
