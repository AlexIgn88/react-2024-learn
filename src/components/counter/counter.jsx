import { counterStyle } from "./counter.module.scss";

const Counter = ({ text, value, decrease, increase }) => {
  return (
    <div className={counterStyle}>
      <span>{text}</span>
      <span>{value}</span>
      <button type="button" onClick={decrease}>
        -
      </button>
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
