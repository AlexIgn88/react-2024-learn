import { useEffect, useRef, useState } from "react";
import { progressBar } from "./progress-bar.module.scss";

const ProgressBar = () => {
  const [showVerticalScroll, setShowVerticalScroll] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const doc = document.documentElement;
    const body = document.body;

    const documentHeight = Math.max(doc.scrollHeight, body.scrollHeight); //общая высота документа
    const clientHeight = Math.max(doc.clientHeight, body.clientHeight); //видимая высота документа
    const maxScrollTop = documentHeight - clientHeight; //максимальное значение вертикальной прокрутки документа

    setShowVerticalScroll(!!maxScrollTop);

    const calculateWidth = (currentScrolling, maxScrollTop) => {
      const widthValue = maxScrollTop
        ? Math.round((currentScrolling / maxScrollTop) * 100)
        : 0;
      return widthValue + "vw";
    };

    const handleScroll = () => {
      const currentScrolling = window.scrollY;

      progressBarRef.current.style.width = calculateWidth(
        currentScrolling,
        maxScrollTop,
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showVerticalScroll ? (
    <div ref={progressBarRef} className={progressBar}></div>
  ) : null;
};

export default ProgressBar;
