"use client";

import { errorPageStyle, title } from "./error-page.module.scss";
import Link from "next/link";

const RootError = () => {
  return (
    <main className={errorPageStyle}>
      <div className={title}>Опс... Поздравляем! Вы сломали наш сайт :D</div>
      <div>
        Однако <Link href="/">Главная</Link> страница на месте
      </div>
    </main>
  );
};

export default RootError;
