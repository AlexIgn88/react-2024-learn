import Review from "../review/review.jsx";
import { reviewsTitle } from "./reviews.module.scss";
import ReviewForm from "../review-form/review-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";

const Reviews = ({ reviews }) => {
  const {
    user: { isAuthorized },
  } = useAuth();

  return (
    <div>
      {reviews.length !== 0 && <h3 className={reviewsTitle}>Отзывы</h3>}
      {reviews.map((review) => (
        <Review key={review} reviewId={review} />
      ))}
      {isAuthorized && <ReviewForm />}
    </div>
  );
};

export default Reviews;
