import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formMe = message.senderId === authUser._id;
  const chatClassName = formMe ? "chat-end" : "chat-start";
  const profilePic = formMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = formMe ? " bg-orange-500" : "bg-gray-700";
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={` chat ${chatClassName} max-w-sm`}>
      <div className=" chat-image avatar">
        <div className=" w-10 rounded-full">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>

      <div
        className={`chat-bubble text-white pb-2 ${bubbleBgColor} ${shakeClass}  break-words `}
      >
        {message.message}
      </div>
      <div className=" chat-footer text-white/60 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
