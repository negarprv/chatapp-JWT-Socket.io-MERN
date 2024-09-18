import { useEffect, useState } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import useListenMessages from "../../hooks/useListenMessages";
import { getRandomEmoji } from "../../utils/emojis";
import useConversation from "../../zustand/useConversation";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  const [updatedConversations, setUpdatedConversations] =
    useState(conversations);

  useListenMessages();

  const { notification } = useConversation();

  useEffect(() => {
    const updateConversationsWithNotifications = () => {
      const updated = conversations.map((conversation) => {
        const notificationCount = notification.filter(
          (notification) => notification.senderId === conversation._id
        ).length;

        return {
          ...conversation,
          notificationCount,
        };
      });

      setUpdatedConversations(updated);
    };

    updateConversationsWithNotifications();
  }, [conversations, notification]);

  return (
    <div className="py-2 flex flex-col    overflow-auto ">
      {updatedConversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversations.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
