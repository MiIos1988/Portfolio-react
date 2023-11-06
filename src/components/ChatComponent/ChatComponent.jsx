import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import chatImg from "../../assets/img/icon/liveChat.png";
import smallImg from "../../assets/img/icon/smallChatImg.png";
import ScrollToBottom from "react-scroll-to-bottom";
import { BsFillSendFill } from "react-icons/bs";
import "animate.css";

const ChatComponent = ({ socket, room }) => {
  const [queryParams] = useSearchParams();
  const query = queryParams.get("room");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [show, setShow] = useState(false);
  const [newMsg, setNewMsg] = useState(false);
  const [showImgChat, setShowImgChat] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    query && socket.emit("chat-visibility",  {room: Number(query), chat: true})
  },[]
  );

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setNewMsg(true);
      setMessageList((list) => [...list, data]);
    });

    socket.on("showChat", data => {
      setShowImgChat(data)
    })

  }, [socket]);

  useEffect(() => {
    inputRef.current.focus();
  }, [messageList]);

  const sendMessage = () => {
    !query
      ? socket.emit("sendMsg", { room, msg: currentMessage, author: "client" })
      : socket.emit("sendMsg", {
          room: Number(query),
          msg: currentMessage,
          author: "admin",
        });
    setMessageList((list) => [
      ...list,
      query
        ? { msg: currentMessage, author: "admin" }
        : { msg: currentMessage, author: "client" },
    ]);
    setCurrentMessage("");
  };

  return (
    <div className="chat ">
      {
            (!show && newMsg) && ( <div className="divMsg" onClick={() => setShow(true)}>
              <p className="msg animate__animated animate__headShake animate__infinite">NEW MESSAGE</p>
            </div>)
          }
        <img
          src={chatImg}
          className={`chatImg responsive-image ${
            showImgChat ? "show" : query ? "show" : "hide"
          }`}
          onClick={() => setShow((prev) => !prev)}
        />
   
      <div className={`chatTable responsive-chat ${show ? "show" : "hide"}`}>
        <div className="header">
          <p>Live Chat with Milos</p>
          <button className="exitImg" onClick={() => {
            setShow((prev) => !prev)
            setNewMsg(false);
          }}>
            X
          </button>
        </div>
        <ScrollToBottom className="chatBody">
          {messageList.map((message, i) => {
            return (
              <div
                key={i}
                className={message.author === "admin" ? "admin " : "client"}
              >
                <p>{message.msg}</p>
              </div>
            );
          })}
        </ScrollToBottom>
        <div className="inputAndBtn">
          <input
            className="inputField"
            ref={inputRef}
            type="text"
            value={currentMessage}
            placeholder="Write a message and press enter..."
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button onClick={() => sendMessage()}>
            <BsFillSendFill />
          </button>
          
          
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
