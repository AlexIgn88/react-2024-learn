import { useForm } from "./use-form";

const ReviewForm = () => {
  const { form, setName, setText, setRating, clearForm } = useForm();
  const { name, text, rating } = form;
  return (
    <form>
      <div>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <span>Rating</span>
        <input
          type="text"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          clearForm();
        }}
      >
        Clear
      </button>
    </form>
  );
};

export default ReviewForm;
