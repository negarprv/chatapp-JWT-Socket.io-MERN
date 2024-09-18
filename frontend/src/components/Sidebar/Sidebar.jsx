import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({ search = true }) => {
  return (
    <div className=" md:border-r border-slate-300/20  p-2 flex flex-col px-3 h-full  ">
      {search && <SearchInput />}

      <div className="divider after:bg-slate-300/30 before:bg-slate-300/30 "></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
