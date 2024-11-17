import { useState } from "react";
import { dishStyle, quantityStyle } from "./dish.module.scss";

const Dish = ({ dish }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className={dishStyle}>
      <h4>{dish.name}</h4>
      <h4>Цена: {dish.price} руб.</h4>
      <div className={quantityStyle}>
        Выбрано: {quantity}
        <button onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>
          -
        </button>
        <button
          onClick={() => setQuantity(quantity <= 4 ? quantity + 1 : quantity)}
        >
          +
        </button>
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
