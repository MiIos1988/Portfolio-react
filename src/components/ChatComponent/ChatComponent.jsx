import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import chatImg from "../../assets/img/icon/liveChat.png"
import smallImg from "../../assets/img/icon/smallChatImg.png"

const ChatComponent = ({socket, room}) => {

    const [queryParams] = useSearchParams();
    const query = queryParams.get("room");
    const [chatImage, seChatImage] = useState(true);
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        socket.on("receiveMessage", (data) => {
          console.log("1222222", data);
        });
      }, [socket]);

  return (
    <div className='chat  '>
      {
        chatImage && <img src={chatImg} className='chatImg responsive-image'/>
      }
      <div className='chatTable responsive-chat'>
        <div className="header">
       <button className='exitImg'>X</button>
        </div>
        <div></div>
        <input type="text" onChange={(e) => setCurrentMessage(e.target.value)}/>
        <button onClick={() => {
           !query ? socket.emit("sendMsg", { room, msg: currentMessage}) : socket.emit("sendMsg", { room: Number(query), msg: currentMessage});
        }
        }>sd

        </button>
      </div>
    </div>
  )
}

export default ChatComponent