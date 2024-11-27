import Menu from "../menu/menu.jsx";
import Reviews from "../reviews/reviews.jsx";
import { main } from "./restaurant.module.scss";
import ReviewForm from "../review-form/review-form.jsx";
import { useUser } from "../user-context/use-user.js";

const Restaurant = ({ restaurant }) => {
  const {
    user: { authorized },
  } = useUser();

  return (
    <main className={main}>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      {authorized && <ReviewForm />}
    </main>
  );
};

export default Restaurant;
