import Review from "../review/review.jsx";
import { reviewsTitle } from "./reviews.module.scss";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3 className={reviewsTitle}>Отзывы</h3>
      {reviews.map((review) => (
        <Review key={review} reviewId={review} />
      ))}
    </div>
  );
};

export default Reviews;
