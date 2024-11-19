import Menu from "../menu/menu.jsx";
import Reviews from "../reviews/reviews.jsx";
import { main } from "./restaurant.module.scss";
import ReviewForm from "../review-form/review-form.jsx";

const Restaurant = ({ restaurant }) => {
  return (
    <main className={main}>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <ReviewForm />
    </main>
  );
};

export default Restaurant;
