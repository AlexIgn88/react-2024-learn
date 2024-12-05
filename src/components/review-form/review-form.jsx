import { useForm } from "./use-form";
import Counter from "../counter/counter.jsx";
import { formStyleTitle, formStyle } from "./review-form.module.scss";
import Button from "../Button/button.jsx";

const ReviewForm = () => {
  const {
    form,
    setName,
    setText,
    decreaseRating,
    increaseRating,
    sendForm,
    clearForm,
  } = useForm();
  const { name, text, rating } = form;
  return (
    <div>
      <h3 className={formStyleTitle}>Оставьте отзыв</h3>
      <form className={formStyle}>
        <div>
          <span>Имя пользователя</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <span>Текст отзыва</span>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div>
          <Counter
            text="Рейтинг: "
            value={rating}
            decrease={decreaseRating}
            increase={increaseRating}
          />
        </div>
        <div>
          <Button
            text="Отправить форму"
            handler={(event) => {
              event.preventDefault();
              sendForm();
              clearForm();
            }}
          />
          <Button
            text="Очистить"
            handler={(event) => {
              event.preventDefault();
              clearForm();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
