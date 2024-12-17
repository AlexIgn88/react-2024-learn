const GetDishByDishId = async (dishId) => {
  const result = await fetch(`http://localhost:3001/api/dish/${dishId}`, {
    next: { tags: ["getDishByDishId"] },
  });

  return result.json();
};

export default GetDishByDishId;
