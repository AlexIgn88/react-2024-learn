import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import ProgressBar from "../progress-bar/progress-bar.jsx";
import { layout } from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      <ProgressBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
