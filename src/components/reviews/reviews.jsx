import Review from "../review/review.jsx";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
