import { useForm } from "./use-form";
import Counter from "../counter/counter.jsx";
import { formStyle } from "./review-form.module.scss";

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
        <button
          onClick={(event) => {
            event.preventDefault();
            sendForm();
            clearForm();
          }}
        >
          Отправить форму
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            clearForm();
          }}
        >
          Очистить
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
