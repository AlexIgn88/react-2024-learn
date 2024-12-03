import { dishStyle } from "./dish.module.scss";
import Counter from "../counter/counter.jsx";
import { useAmount } from "./useAmount.jsx";
import { useUser } from "../user-context/use-user.js";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice.js";
import { useSelector } from "react-redux";

const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { amount, decrease, increase } = useAmount(0);
  const {
    user: { authorized },
  } = useUser();

  return (
    <div className={dishStyle}>
      <h4>{dish.name}</h4>
      <h4>Цена: {dish.price} руб.</h4>
      {authorized && (
        <Counter
          text="Выбрано: "
          value={amount}
          decrease={decrease}
          increase={increase}
        />
      )}
      <div>
        {dish.ingredients.map((ingredient) => (
          <span key={ingredient}>{ingredient}</span>
        ))}
      </div>
    </div>
  );
};

export default Dish;
