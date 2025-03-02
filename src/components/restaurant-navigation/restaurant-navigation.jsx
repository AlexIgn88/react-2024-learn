import NavigationTab from "../navigation-tab/navigation-tab.jsx";

const RestaurantNavigation = ({ restaurant }) => {
  const { id, name } = restaurant;

  return <NavigationTab path={`/restaurants/${id}`} title={name} />;
};

export default RestaurantNavigation;
