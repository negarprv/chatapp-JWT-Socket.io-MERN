import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/frontend-src-assets-sounds-notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const {
    messages,
    setMessages,
    selectedConversation,
    notification,
    setNotification,
  } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);

      if (
        selectedConversation &&
        selectedConversation._id == newMessage.senderId
      ) {
        newMessage.shouldShake = true;
        sound.play();
        setMessages([...messages, newMessage]);
      } else {
        if (!notification.includes(newMessage)) {
          setNotification([...notification, newMessage]);
        }

        console.log(notification, "----------");
        sound.play();
      }
    });

    return () => socket?.off("newMessage");
  }, [
    socket,
    setMessages,
    messages,
    selectedConversation,
    notification,
    setNotification,
  ]);

  useEffect(() => {
    console.log("Updated notifications:", notification);
  }, [notification]);
};

export default useListenMessages;
