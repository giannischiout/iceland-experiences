import { IoSearchOutline } from "react-icons/io5";

type Props = {
  onSubmit: () => void;
};
export const SearchButton = ({ onSubmit }: Props) => {
  return (
    <button
      onClick={onSubmit}
      className="bg-primary hover:bg-primary/80 mb-0.5 flex h-9 items-center justify-center rounded-sm px-4 text-white transition-colors duration-300 ease-in-out"
    >
      <IoSearchOutline className="mr-1" size={18} />
      Submit
    </button>
  );
};
