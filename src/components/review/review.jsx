"use client";

import ReviewContent from "./review-content.jsx";
import { useState } from "react";
import ReviewForm from "../review-form/review-form.jsx";

const Review = ({ review, user, currentUserId, onUpdate }) => {
  const { userId } = review;

  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const isMessageAuthor = userId === currentUserId;

  return isUpdateMode ? (
    <ReviewForm
      reviewData={review}
      onUpdate={onUpdate}
      setIsUpdateMode={setIsUpdateMode}
    />
  ) : (
    <ReviewContent
      review={review}
      user={user}
      isMessageAuthor={isMessageAuthor}
      isUpdateMode={isUpdateMode}
      setIsUpdateMode={setIsUpdateMode}
    />
  );
};

export default Review;
