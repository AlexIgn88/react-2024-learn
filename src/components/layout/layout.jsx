import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import ProgressBar from "../progress-bar/progress-bar.jsx";
import { layout } from "./layout.module.scss";
import Cart from "../cart/cart.jsx";
import { useAuth } from "../auth-context/use-auth.js";

const Layout = ({ children }) => {
  const {
    user: { isAuthorized },
  } = useAuth();

  return (
    <div className={layout}>
      <Header />
      <ProgressBar />
      {children}
      {isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};

export default Layout;
