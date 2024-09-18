import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import useConversation from "../../zustand/useConversation";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const { notification, setNotification, selectedConversation } =
    useConversation();

  useEffect(() => {
    if (selectedConversation) {
      const filteredNotifications = notification.filter(
        (notif) => notif.senderId !== selectedConversation._id
      );
      console.log(filteredNotifications, "filterdNotif");
      if (filteredNotifications.length !== notification.length) {
        setNotification(filteredNotifications);
      }
    }
  }, [selectedConversation, notification, setNotification]);

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className=" px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className=" text-center  text-white/60">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
