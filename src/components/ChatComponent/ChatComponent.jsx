import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import chatImg from "../../assets/img/icon/liveChat.png"
import smallImg from "../../assets/img/icon/smallChatImg.png"

const ChatComponent = ({socket, room}) => {

    const [queryParams] = useSearchParams();
    const query = queryParams.get("room");
    const [chatImage, seChatImage] = useState(true)

    useEffect(() => {
        socket.on("receiveMessage", (data) => {
          console.log("1222222", data);
        });
      }, [socket]);

  return (
    <div className='chat heightChat'>
      {
        chatImage && <img src={chatImg} className='chatImg responsive-image'/>
      }
      <div className='chatTable '>
        <div className="header">
       <button className='exitImg'>X</button>
        </div>
        <div></div>
        <input type="text" />
        <button>sd

        </button>
      </div>
      
       {/* <button onClick={() => {
        {
          !query ? socket.emit("sendMsg", { room, msg: "tesdfsdfsdf"}) : socket.emit("sendMsg", { room: Number(query), msg: "t111111111"});
        }
        
      }
      }>Click</button> */}
    </div>
  )
}

export default ChatComponent
