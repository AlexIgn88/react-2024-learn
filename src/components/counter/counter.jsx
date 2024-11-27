import { counterStyle } from "./counter.module.scss";
import Button from "../Button/button.jsx";

const Counter = ({ text, value, decrease, increase }) => {
  return (
    <div className={counterStyle}>
      <span>{text}</span>
      <span>{value}</span>
      <Button text="-" handler={decrease} />
      <Button text="+" handler={increase} />
    </div>
  );
};

export default Counter;
