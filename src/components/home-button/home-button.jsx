import Button from "../Button/button.jsx";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Link href="/">
      <Button text={<FaHome />} />
    </Link>
  );
};

export default HomeButton;
