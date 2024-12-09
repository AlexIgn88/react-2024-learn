import { loaderStyle } from "./loader.module.scss";
import imgUrl from "../../assets/fidget-spinner.gif";

function Loader() {
  return (
    <div className={loaderStyle}>
      <img alt="spinner" src={imgUrl} />
    </div>
  );
}

export default Loader;
