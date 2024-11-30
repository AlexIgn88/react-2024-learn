import Layout from "../layout/layout.jsx";
import RestaurantsPage from "../restaurants-page/restaurants-page.jsx";
import { ThemeContextProvider } from "../theme-context/theme-context.jsx";
import { UserContextProvider } from "../user-context/user-context.jsx";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};

export default App;
