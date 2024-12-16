"use client";

import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import ProgressBar from "../progress-bar/progress-bar.jsx";
import { layout } from "./app.module.scss";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";
import { AuthContextProvider } from "../auth-context/auth-context.jsx";
import { ThemeContextProvider } from "../theme-context/theme-context.jsx";

const App = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <div className={layout}>
            <Header />
            <ProgressBar />
            {children}
            <Footer />
          </div>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
