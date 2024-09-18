import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIndex, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={` flex gap-2 items-center hover:bg-orange-500/50 rounded p-2 py-2 cursor-pointer transition-all duration-100 ${
          isSelected ? "bg-orange-500/80 hover:bg-orange-500/80" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={` avatar ${isOnline ? "online" : ""}`}>
          <div className=" w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className=" flex flex-col flex-1">
          <div className=" flex gap-3 justify-between">
            <p className=" font-bold text-gray-200">{conversation.fullName}</p>
            <span className=" text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIndex && (
        <div className="divider after:bg-slate-300/20 before:bg-slate-300/20 my-0 py-0 h-1"></div>
      )}
    </>
  );
};

export default Conversation;
