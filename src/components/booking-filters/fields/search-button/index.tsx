import { IoSearchOutline } from "react-icons/io5";

type Props = {
  onSubmit: () => void;
};
export const SearchButton = ({ onSubmit }: Props) => {
  return (
    <button
      onClick={onSubmit}
      className="bg-primary hover:bg-primary/80 mb-0.5 flex h-9 w-9 items-center justify-center rounded-sm font-bold text-white transition-colors duration-300 ease-in-out"
    >
      <IoSearchOutline size={18} />
    </button>
  );
};
