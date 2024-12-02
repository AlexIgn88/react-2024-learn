import Review from "../review/review.jsx";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      {reviews.map((review) => (
        <Review key={review} reviewId={review} />
      ))}
    </div>
  );
};

export default Reviews;
