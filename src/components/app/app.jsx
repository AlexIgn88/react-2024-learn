import Layout from "../layout/layout.jsx";
import RestaurantsPage from "../restaurants-page/restaurants-page.jsx";
import { ThemeContextProvider } from "../theme-context/theme-context.jsx";
import { AuthContextProvider } from "../auth-context/auth-context.jsx";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
