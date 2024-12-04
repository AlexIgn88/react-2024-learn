import { dishStyle } from "./dish.module.scss";
import Counter from "../counter/counter.jsx";
import { useAuth } from "../auth-context/use-auth.js";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../../redux/ui/cart/cart-slice.js";

const Dish = ({ dishId, showIngredients, cartView }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const dispatch = useDispatch();
  const amount =
    useSelector((state) => selectCartItemAmountById(state, dishId)) || 0;
  const decrease = () => dispatch(removeFromCart(dishId));
  const increase = () => dispatch(addToCart(dishId));
  const {
    user: { isAuthorized },
  } = useAuth();

  if (!dish.name) {
    return null;
  }

  const flex = cartView ? { display: "block" } : { display: "flex" };

  return (
    <div className={dishStyle} style={flex}>
      <div>
        <h4>{dish.name}</h4>
        <h4>Цена: {dish.price} руб.</h4>
      </div>
      {showIngredients && (
        <div>
          <h4>Ингредиенты</h4>
          {dish.ingredients.map((ingredient) => (
            <div key={ingredient}>{ingredient}</div>
          ))}
        </div>
      )}
      <div>
        {isAuthorized && (
          <>
            {!cartView && <h4>Выберите количество</h4>}
            <Counter
              text="Выбрано: "
              value={amount}
              decrease={decrease}
              increase={increase}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Dish;
