import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import Sidebar from "../Sidebar/Sidebar";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className=" min-w-[350px]  flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className=" bg-slate-300/80 py-2 px-4 mb-2 flex items-center gap-1">
            <div className="drawer  w-[13%]">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="drawer-button btn btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-50 h-full">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  <Sidebar />
                </ul>
              </div>
            </div>

            <div className=" flex items-center gap-1">
              <span className=" label-text">To:&nbsp; </span>
              <span className=" text-gray-900 font-bold">
                {selectedConversation.fullName}
              </span>
            </div>
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
    <div className=" flex items-center justify-center w-full h-full pt-2">
      <div className=" px-4 text-center items-center gap-2 text-gray-200 font-semibold flex flex-col sm:text-lg md:text-xl">
        <p>Welcome 👋 {authUser.fullName} 🌟</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className=" text-3xl md:text-6xl text-center" />
        <div className="md:hidden">
          <Sidebar search={false} />
        </div>
      </div>
    </div>
  );
};
