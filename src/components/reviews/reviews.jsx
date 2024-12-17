"use client";

import Review from "../review/review.jsx";
import { reviewsTitle } from "./reviews.module.scss";
import ReviewForm from "../review-form/review-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";
import { useCallback } from "react";
import { addReview } from "../../services/add-review.js";
import { updateReview } from "../../services/update-review.js";

const Reviews = ({ restaurantId, reviews, users }) => {
  const { user } = useAuth();
  const { isAuthorized, id } = user;
  const usersObject = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  const handleAddReview = useCallback(
    (review) => {
      addReview(restaurantId, review).then((res) => console.log("res", res));
    },
    [restaurantId],
  );

  const handleUpdateReview = useCallback((reviewId, review) => {
    updateReview(reviewId, review).then((res) => console.log("res", res));
  }, []);

  return (
    <div>
      {reviews.length !== 0 && <h3 className={reviewsTitle}>Отзывы</h3>}
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          user={usersObject[review.userId]}
          currentUserId={id}
          onUpdate={handleUpdateReview}
        />
      ))}
      {isAuthorized && (
        <ReviewForm onSubmit={handleAddReview} currentUserId={id} />
      )}
    </div>
  );
};

export default Reviews;
