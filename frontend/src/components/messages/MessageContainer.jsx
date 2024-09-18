import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className=" min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className=" bg-slate-300/80 py-2 px-4 mb-2">
            <span className=" label-text">To:&nbsp; </span>
            <span className=" text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessagesInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div className=" px-4 text-center items-center gap-2 text-gray-200 font-semibold flex flex-col sm:text-lg md:text-xl">
        <p>Welcome 👋 {authUser.fullName} 🌟</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className=" text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
