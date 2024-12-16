import Button from "../Button/button.jsx";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

const ForwardButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.forward();
  };

  return <Button text={<MdKeyboardArrowRight />} handler={onClick} />;
};

export default ForwardButton;
