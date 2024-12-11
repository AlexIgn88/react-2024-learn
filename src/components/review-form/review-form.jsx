import { useForm } from "./use-form";
import Counter from "../counter/counter.jsx";
import { formStyleTitle, formStyle } from "./review-form.module.scss";
import Button from "../Button/button.jsx";

const ReviewForm = ({
  reviewData,
  onSubmit,
  onUpdate,
  currentUserId,
  setIsUpdateMode,
}) => {
  const { form, setText, decreaseRating, increaseRating, clearForm } =
    useForm(reviewData);
  const { text: formText, rating: formRating } = form;

  const isNeedUpdateReview = reviewData && onUpdate && setIsUpdateMode;

  return (
    <div>
      <h3 className={formStyleTitle}>
        {reviewData ? "Отредактируйте отзыв" : "Оставьте отзыв"}
      </h3>
      <form className={formStyle}>
        <div>
          <span>Текст отзыва</span>
          <textarea
            value={formText}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div>
          <Counter
            text="Рейтинг: "
            value={formRating}
            decrease={decreaseRating}
            increase={increaseRating}
          />
        </div>
        <div>
          <Button
            text={isNeedUpdateReview ? "Отредактировать" : "Отправить форму"}
            handler={(event) => {
              event.preventDefault();
              if (onSubmit) {
                onSubmit({
                  userId: currentUserId,
                  text: formText,
                  rating: formRating,
                });
              }
              if (isNeedUpdateReview) {
                onUpdate(reviewData?.id, {
                  text: formText,
                  rating: formRating,
                });
                setIsUpdateMode(false);
              }
              clearForm();
            }}
          />
          <Button
            text={isNeedUpdateReview ? "Отмена" : "Очистить"}
            handler={(event) => {
              event.preventDefault();
              isNeedUpdateReview ? setIsUpdateMode(false) : clearForm();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
