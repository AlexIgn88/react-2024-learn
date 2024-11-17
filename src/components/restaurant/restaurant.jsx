import Menu from "../menu/menu.jsx";
import Reviews from "../reviews/reviews.jsx";
import { main } from "./restaurant.module.scss";

const Restaurant = ({ restaurant }) => {
  return (
    <main className={main}>
      <div>
        <h2>{restaurant.name}</h2>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    </main>
  );
};

export default Restaurant;
