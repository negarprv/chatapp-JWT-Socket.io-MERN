import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = false;

  return (
    <div className=" md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className=" bg-slate-300/80 py-2 px-4 mb-2">
            <span className=" label-text">To:&nbsp; </span>
            <span className=" text-gray-900 font-bold">John does</span>
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
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div className=" px-4 text-center items-center gap-2 text-gray-200 font-semibold flex flex-col sm:text-lg md:text-xl">
        <p>Welcome 👋 John Doe 🌟</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className=" text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
