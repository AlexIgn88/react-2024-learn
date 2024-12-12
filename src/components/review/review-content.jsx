import { reviewStyle } from "./review.module.scss";
import Button from "../Button/button.jsx";

const ReviewContent = ({
  review,
  user,
  isMessageAuthor,
  isUpdateMode,
  setIsUpdateMode,
}) => {
  const { text, rating } = review;

  return (
    <div className={reviewStyle}>
      <h4>{user?.name}</h4>
      <div>{text}</div>
      <h4>Оценка: {rating}</h4>
      {isMessageAuthor && (
        <Button
          text={!isUpdateMode ? "Отредактировать" : "Сохранить"}
          handler={() => {
            setIsUpdateMode(!isUpdateMode);
          }}
        />
      )}
    </div>
  );
};

export default ReviewContent;
