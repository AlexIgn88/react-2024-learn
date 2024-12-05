import { homePage, title } from "./home-page.module.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className={homePage}>
      <h1 className={title}>Добро пожаловать в Лучшие рестораны!</h1>
      <Link to="/restaurants">Рестораны</Link>
    </main>
  );
};

export default HomePage;
