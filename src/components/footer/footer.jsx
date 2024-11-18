import { footer } from "./footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={footer}>
      <p>&copy; {currentYear} Restaurants</p>
    </footer>
  );
};

export default Footer;
