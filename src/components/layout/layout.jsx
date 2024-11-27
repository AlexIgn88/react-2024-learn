import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import ProgressBar from "../progress-bar/progress-bar.jsx";
import { layout } from "./layout.module.scss";
import { ThemeContextProvider } from "../theme-context/theme-context.jsx";

const Layout = ({ children }) => {
  return (
    <ThemeContextProvider>
      <div className={layout}>
        <Header />
        <ProgressBar />
        {children}
        <Footer />
      </div>
    </ThemeContextProvider>
  );
};

export default Layout;
