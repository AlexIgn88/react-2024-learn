import { reviewStyle } from "./review.module.scss";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/reviews-slice.js";
import { selectUserById } from "../../redux/entities/users/users-slice.js";

const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) => selectUserById(state, review.userId));

  return (
    <div className={reviewStyle}>
      <h4>{user.name}</h4>
      <div>{review.text}</div>
      <h4>Оценка: {review.rating}</h4>
    </div>
  );
};

export default Review;
