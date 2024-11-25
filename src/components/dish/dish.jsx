import { dishStyle } from "./dish.module.scss";
import Counter from "../counter/counter.jsx";
import { useAmount } from "./useAmount.jsx";

const Dish = ({ dish }) => {
  const { amount, decrease, increase } = useAmount(0);

  return (
    <div className={dishStyle}>
      <h4>{dish.name}</h4>
      <h4>Цена: {dish.price} руб.</h4>
      <Counter
        text="Выбрано: "
        value={amount}
        decrease={decrease}
        increase={increase}
      />
      <div>
        {dish.ingredients.map((ingredient) => (
          <span key={ingredient}>{ingredient}</span>
        ))}
      </div>
    </div>
  );
};

export default Dish;
