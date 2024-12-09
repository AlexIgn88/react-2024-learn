import { useGetUsersQuery } from "../../redux/services/api/index.js";
import LoadErrorDisplay from "../load-error-display/load-error-display.jsx";
import ReviewContent from "./review-content.jsx";
import { useState } from "react";
import ReviewForm from "../review-form/review-form.jsx";

const Review = ({ review, currentUserId, onUpdate }) => {
  const { userId } = review;

  const {
    data: user,
    isLoading,
    isError,
  } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === userId),
    }),
  });

  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const isMessageAuthor = userId === currentUserId;

  return (
    <LoadErrorDisplay data={user} isLoading={isLoading} isError={isError}>
      {isUpdateMode ? (
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
      )}
    </LoadErrorDisplay>
  );
};

export default Review;
