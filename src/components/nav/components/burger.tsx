import { IoIosMenu, IoMdClose } from "react-icons/io";

type Props = {
  onToggle: () => void;
  open: boolean;
};
export const Hamburger = ({ onToggle, open }: Props) => {
  return (
    <div onClick={onToggle} className="block lg:hidden">
      {!open ? <IoIosMenu size={28} /> : <IoMdClose size={20} />}
    </div>
  );
};
