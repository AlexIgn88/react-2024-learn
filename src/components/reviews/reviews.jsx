"use client";

import Review from "../review/review.jsx";
import { reviewsTitle } from "./reviews.module.scss";
import ReviewForm from "../review-form/review-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";
import {
  useAddReviewMutation,
  useUpdateReviewMutation,
} from "../../redux/services/api/index.js";
import { useCallback } from "react";

const Reviews = ({ restaurantId, reviews, users }) => {
  const [addReview] = useAddReviewMutation();
  const [updateReview] = useUpdateReviewMutation();

  const { user } = useAuth();
  const { isAuthorized, id } = user;
  const usersObject = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  const handleAddReview = useCallback(
    (review) => {
      addReview({ restaurantId, review });
    },
    [addReview, restaurantId],
  );
  const handleUpdateReview = useCallback(
    (reviewId, review) => {
      updateReview({ reviewId, review });
    },
    [updateReview],
  );

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
