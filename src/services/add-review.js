export const addReview = async (restaurantId, review) => {
  const response = await fetch(`/api/review/${restaurantId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
    next: { tags: ["addReview"] },
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage =
      errorData.message || `Error adding review: ${response.status}`;
    throw new Error(errorMessage);
  }

  return response.json();
};
