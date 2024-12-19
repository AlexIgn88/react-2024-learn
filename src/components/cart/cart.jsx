"use client";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart-slice";
import Dish from "../dish/dish.jsx";
import { cartStyle, dishLists } from "./cart.module.scss";

const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <div className={cartStyle}>
      <h3>Корзина</h3>
      <ul className={dishLists}>
        {items.map(({ id }) => (
          <li key={id}>
            <Dish dishId={id} cartView />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
