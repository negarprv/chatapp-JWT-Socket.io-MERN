import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className=" flex h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 md:pt-5 border border-gray-300/10">
      <div className="max-md:hidden">
        <Sidebar />
      </div>

      <MessageContainer />
    </div>
  );
};

export default Home;
