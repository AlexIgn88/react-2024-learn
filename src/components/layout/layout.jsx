import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import RestaurantsNavigation from "../restaurants-navigation/restaurants-navigation.jsx";

const Layout = ({ children, onRestaurantChange }) => {
  return (
    <div>
      <Header />
      <RestaurantsNavigation onRestaurantChange={onRestaurantChange} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
