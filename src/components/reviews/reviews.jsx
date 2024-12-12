import Review from "../review/review.jsx";
import { reviewsTitle } from "./reviews.module.scss";
import ReviewForm from "../review-form/review-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";

const Reviews = ({ reviews, onAddReview, onUpdateReview }) => {
  const { user } = useAuth();
  const { isAuthorized, id } = user;

  return (
    <div>
      {reviews.length !== 0 && <h3 className={reviewsTitle}>Отзывы</h3>}
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          currentUserId={id}
          onUpdate={onUpdateReview}
        />
      ))}
      {isAuthorized && <ReviewForm onSubmit={onAddReview} currentUserId={id} />}
    </div>
  );
};

export default Reviews;
