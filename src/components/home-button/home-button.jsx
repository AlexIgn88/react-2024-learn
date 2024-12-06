import Button from "../Button/button.jsx";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const HomeButton = () => {
  const navigate = useNavigate();
  const onClick = () => navigate("/");

  return <Button text={<FaHome />} handler={onClick} />;
};

export default HomeButton;
