import Layout from "../layout/layout.jsx";
import RestaurantsPage from "../../pages/restaurants-page/restaurants-page.jsx";
import { ThemeContextProvider } from "../theme-context/theme-context.jsx";
import { AuthContextProvider } from "../auth-context/auth-context.jsx";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RestaurantPage from "../../pages/restaurant-page/restaurant-page.jsx";
import HomePage from "../../pages/home-page/home-page.jsx";
import MenuPage from "../../pages/menu-page/menu-page.jsx";
import ReviewsPage from "../../pages/reviews-page/reviews-page.jsx";
import DishPage from "../../pages/dish-page/dish-page.jsx";
import ErrorPage from "../../pages/404-page/404-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Navigate to="/404" replace />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantPage />,
            children: [
              { path: "menu", element: <MenuPage /> },
              { path: "reviews", element: <ReviewsPage /> },
            ],
          },
        ],
      },
      {
        path: "/dish/:dishId",
        element: <DishPage />,
      },
      {
        path: "/404",
        element: <ErrorPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
