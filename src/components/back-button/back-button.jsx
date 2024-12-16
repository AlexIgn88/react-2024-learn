import Button from "../Button/button.jsx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  return <Button text={<MdKeyboardArrowLeft />} handler={onClick} />;
};

export default BackButton;
