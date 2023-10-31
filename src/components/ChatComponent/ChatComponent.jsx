import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import chatImg from "../../assets/img/icon/liveChat.png";
import smallImg from "../../assets/img/icon/smallChatImg.png";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatComponent = ({ socket, room }) => {
  const [queryParams] = useSearchParams();
  const query = queryParams.get("room");
  const [chatImage, seChatImage] = useState(true);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat  ">
      {chatImage && <img src={chatImg} className="chatImg responsive-image" />}
      <div className="chatTable responsive-chat">
        <div className="header">
          <button className="exitImg">X</button>
        </div>
        <ScrollToBottom>
          {messageList.map((message, i) => {
            return (
              <div key={i} className={ message.author === "admin" ? "admin" : "client"}>
                <p>{message.msg}</p>
              </div>
            );
          })}
        </ScrollToBottom>
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button
          onClick={() => {
            !query
              ? socket.emit("sendMsg", { room, msg: currentMessage, author: "client" })
              : socket.emit("sendMsg", {
                  room: Number(query),
                  msg: currentMessage,
                  author: "admin" 
                });
            setMessageList((list) => [...list, query ? {msg: currentMessage, author: "admin"} : {msg: currentMessage, author: "client"}]);
            setCurrentMessage("");
          }}
        >
          sd
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
