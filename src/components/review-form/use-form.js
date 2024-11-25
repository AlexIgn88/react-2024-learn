import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 0,
};

const ACTION_TYPES = {
  SET_NAME_ACTION: "SET_NAME",
  SET_TEXT: "SET_TEXT",
  SET_RATING: "SET_RATING",
  DECREASE_RATING: "DECREASE_RATING",
  INCREASE_RATING: "INCREASE_RATING",
  CLEAR_FORM: "CLEAR_FORM",
  SEND_FORM: "SEND_FORM",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_NAME_ACTION:
      return { ...state, name: payload };
    case ACTION_TYPES.SET_TEXT:
      return { ...state, text: payload };
    case ACTION_TYPES.SET_RATING:
      return { ...state, rating: payload };
    case ACTION_TYPES.DECREASE_RATING:
      return { ...state, rating: state.rating > 0 ? state.rating - 1 : 0 };
    case ACTION_TYPES.INCREASE_RATING:
      return {
        ...state,
        rating: state.rating <= 4 ? state.rating + 1 : state.rating,
      };
    case ACTION_TYPES.CLEAR_FORM:
      return DEFAULT_FORM_VALUE;
    case ACTION_TYPES.SEND_FORM:
      return state;
    default:
      return state;
  }
};
export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setName = (name) => {
    dispatch({ type: ACTION_TYPES.SET_NAME_ACTION, payload: name });
  };
  const setText = (text) => {
    dispatch({ type: ACTION_TYPES.SET_TEXT, payload: text });
  };
  const setRating = (rating) => {
    dispatch({ type: ACTION_TYPES.SET_RATING, payload: rating });
  };
  const decreaseRating = () => {
    dispatch({ type: ACTION_TYPES.DECREASE_RATING });
  };
  const increaseRating = () => {
    dispatch({ type: ACTION_TYPES.INCREASE_RATING });
  };
  const clearForm = () => {
    dispatch({
      type: ACTION_TYPES.CLEAR_FORM,
    });
  };
  const sendForm = () => {
    dispatch({
      type: ACTION_TYPES.SEND_FORM,
    });
    console.log(`Форма отправлена. ${JSON.stringify(form)}`);
  };

  return {
    form,
    setName,
    setText,
    setRating,
    decreaseRating,
    increaseRating,
    sendForm,
    clearForm,
  };
};
