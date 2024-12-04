import Button from "../Button/button.jsx";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const BackButton = () => {
  const navigate = useNavigate();
  const onClick = () => navigate(-1);

  return <Button text={<MdKeyboardArrowLeft />} handler={onClick} />;
};

export default BackButton;
