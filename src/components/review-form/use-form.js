import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: "",
};

const ACTION_TYPES = {
  SET_NAME_ACTION: "SET_NAME",
  SET_TEXT: "SET_TEXT",
  SET_RATING: "SET_RATING",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_NAME_ACTION:
      return { ...state, name: payload };
    case ACTION_TYPES.SET_TEXT:
      return { ...state, text: payload };
    case ACTION_TYPES.SET_RATING:
      return { ...state, rating: payload };
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
  const clearForm = () => {
    dispatch({
      type: ACTION_TYPES.SET_NAME_ACTION,
      payload: DEFAULT_FORM_VALUE.name,
    });
    dispatch({
      type: ACTION_TYPES.SET_TEXT,
      payload: DEFAULT_FORM_VALUE.text,
    });
    dispatch({
      type: ACTION_TYPES.SET_RATING,
      payload: DEFAULT_FORM_VALUE.rating,
    });
  };
  return {
    form,
    setName,
    setText,
    setRating,
    clearForm,
  };
};
