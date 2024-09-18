"use client";

import { useEffect, useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessagesInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const textareaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
    adjustTextareaHeight();
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;

      if (textarea.scrollHeight > 150) {
        textarea.style.overflowY = "auto";
      } else {
        textarea.style.overflowY = "hidden";
      }
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  return (
    <form className=" px-4 my-3" onSubmit={handleSubmit}>
      <div className=" w-full relative">
        <textarea
          ref={textareaRef}
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white outline-none resize-none "
          placeholder="Send a message"
          value={message}
          onChange={handleInputChange}
          rows={1}
          style={{ minHeight: "40px", maxHeight: "150px", overflowY: "auto" }}
        />
        <button
          type="submit"
          className=" absolute inset-y-0 end-0 flex items-center px-3  "
          disabled={loading}
        >
          {loading ? (
            <div className=" loading loading-spinner"></div>
          ) : (
            <BsSend
              className={` transition-all duration-200 hover:text-orange-500 ${
                message && "text-orange-500"
              }`}
            />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessagesInput;
