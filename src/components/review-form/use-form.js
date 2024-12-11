import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  text: "",
  rating: 0,
};

const ACTION_TYPES = {
  SET_TEXT: "SET_TEXT",
  SET_RATING: "SET_RATING",
  DECREASE_RATING: "DECREASE_RATING",
  INCREASE_RATING: "INCREASE_RATING",
  CLEAR_FORM: "CLEAR_FORM",
  SEND_FORM: "SEND_FORM",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
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
      console.log(`Форма отправлена. ${JSON.stringify(payload)}`);
      return state;
    default:
      return state;
  }
};
export const useForm = (reviewData) => {
  const initialState = reviewData || DEFAULT_FORM_VALUE;
  const [form, dispatch] = useReducer(reducer, initialState);

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
  const sendForm = (data) => {
    dispatch({
      type: ACTION_TYPES.SEND_FORM,
      payload: data,
    });
  };

  return {
    form,
    setText,
    setRating,
    decreaseRating,
    increaseRating,
    sendForm,
    clearForm,
  };
};
