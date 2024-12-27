"use client";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart-slice";
import Dish from "../dish/dish.jsx";
import { cartStyle, dishLists } from "./cart.module.scss";
import getDishByDishId from "../../services/get-dish-by-dish-id.js";
import { useEffect, useState } from "react";

const Cart = () => {
  const [dishes, setDishes] = useState([]);

  const items = useSelector(selectCartItems);

  useEffect(() => {
    async function getDishes() {
      const dishes = await Promise.all(
        items.map(async ({ id }) => await getDishByDishId(id)),
      );
      setDishes(dishes);
    }
    getDishes();
  }, [items]);

  if (!dishes.length) {
    return null;
  }

  return (
    <div className={cartStyle}>
      <h3>Корзина</h3>
      <ul className={dishLists}>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} cartView />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
