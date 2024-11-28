import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import ProgressBar from "../progress-bar/progress-bar.jsx";
import { layout } from "./layout.module.scss";
import { ThemeContextProvider } from "../theme-context/theme-context.jsx";
import { UserContextProvider } from "../user-context/user-context.jsx";

const Layout = ({ children }) => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <div className={layout}>
          <Header />
          <ProgressBar />
          {children}
          <Footer />
        </div>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};

export default Layout;
