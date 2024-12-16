import { homePage, title } from "./page.module.scss";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className={homePage}>
      <h1 className={title}>Добро пожаловать в Лучшие рестораны!</h1>
      <Link href="/restaurants">Рестораны</Link>
    </main>
  );
};

export default HomePage;
