import { reviewStyle } from "./review.module.scss";

const Review = ({ review }) => {
  return (
    <div className={reviewStyle}>
      <h4>{review.user}</h4>
      <div>{review.text}</div>
      <h4>Оценка: {review.rating}</h4>
    </div>
  );
};

export default Review;
