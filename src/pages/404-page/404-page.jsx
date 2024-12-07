import { errorPageStyle, title } from "./404-page.module.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className={errorPageStyle}>
      <div className={title}>Опс... Поздравляем! Вы сломали наш сайт :D</div>
      <div>
        Однако <Link to="/">Главная</Link> страница на месте
      </div>
    </main>
  );
};

export default ErrorPage;
