import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

const ChatComponent = ({socket, room}) => {

    const [queryParams] = useSearchParams();
    const query = queryParams.get("room");

    useEffect(() => {
        socket.on("receiveMessage", (data) => {
          console.log("1222222", data);
        });
      }, [socket]);

  return (
    <div>
       <button onClick={() => {
        {
          !query ? socket.emit("sendMsg", { room, msg: "tesdfsdfsdf"}) : socket.emit("sendMsg", { room: Number(query), msg: "t111111111"});
        }
        
      }
      }>Click</button>
    </div>
  )
}

export default ChatComponent
