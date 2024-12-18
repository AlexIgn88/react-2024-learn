export const updateReview = async (reviewId, review) => {
  const response = await fetch(`http://localhost:3001/api/review/${reviewId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
    next: { tags: ["updateReview"] },
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage =
      errorData.message || `Error updating review: ${response.status}`;
    throw new Error(errorMessage);
  }

  return response.json();
};
