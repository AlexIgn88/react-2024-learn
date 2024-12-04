import Button from "../Button/button.jsx";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const ForwardButton = () => {
  const navigate = useNavigate();
  const onClick = () => navigate(+1);

  return <Button text={<MdKeyboardArrowRight />} handler={onClick} />;
};

export default ForwardButton;
