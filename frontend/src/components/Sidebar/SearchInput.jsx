import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className=" flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered  rounded-full bg-gray-700 border-gray-600 text-white"
      />
      <button
        type="submit"
        className=" btn btn-circle bg-orange-500 border-none text-white"
      >
        <IoIosSearch className=" w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
