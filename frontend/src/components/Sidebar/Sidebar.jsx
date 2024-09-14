import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className=" border-r border-slate-300/20  p-2 flex flex-col px-3">
      <SearchInput />
      <div className="divider after:bg-slate-300/30 before:bg-slate-300/30 "></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
