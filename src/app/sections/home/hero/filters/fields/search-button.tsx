import { IoSearchOutline } from "react-icons/io5";

export const SearchButton = () => {
  return (
    <button className="bg-primary hover:bg-primary/80 ml-3 flex h-11 w-11 items-center justify-center rounded-md font-bold text-white transition-colors duration-300 ease-in-out">
      <IoSearchOutline size={24} />
    </button>
  );
};
