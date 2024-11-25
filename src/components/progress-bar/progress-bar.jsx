import { useEffect, useState } from "react";
import { progressBar } from "./progress-bar.module.scss";

const ProgressBar = () => {
  const [progressBarWidth, setProgressBarWidth] = useState({ width: "0vw" });

  useEffect(() => {
    const doc = document.documentElement;
    const body = document.body;

    const documentHeight = Math.max(doc.scrollHeight, body.scrollHeight); //общая высота документа
    const clientHeight = Math.max(doc.clientHeight, body.clientHeight); //видимая высота документа

    const calculateWidth = () => {
      const currentScrolling = window.scrollY; //значение текущей прокрутки
      const maxScrollTop = documentHeight - clientHeight; //максимальное значение вертикальной прокрутки документа

      const widthValue = maxScrollTop
        ? Math.round((currentScrolling / maxScrollTop) * 100)
        : 0;
      return { width: widthValue + "vw" };
    };

    const handleScroll = () => {
      setProgressBarWidth(calculateWidth());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={progressBar} style={progressBarWidth}></div>;
};

export default ProgressBar;
