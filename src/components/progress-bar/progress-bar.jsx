import { useEffect, useState } from "react";
import { progressBar } from "./progress-bar.module.scss";

const ProgressBar = () => {
  const [progressBarWidth, setProgressBarWidth] = useState({ width: "0vw" });

  useEffect(() => {
    const calculateWidth = () => {
      const currentScrolling = window.scrollY; //значение текущей прокрутки
      const maxScrollTop =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight; //максимальное значение вертикальной прокрутки документа

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
