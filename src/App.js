import { useEffect, useState } from "react";
import HomePageComponent from "./pages/HomePageComponent";
import takeIt from "./service/takeIt";
import io from "socket.io-client";
import { useSearchParams } from "react-router-dom";

const socket = io.connect("http://localhost:5500");

function App() {
  const [queryParams] = useSearchParams();
  const [room, setRoom] = useState(Math.floor(Math.random() * 900000) + 100000);
  const query = queryParams.get("room");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ip = await takeIt();
        socket.emit("enterRoom", {ip, query, room});
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };
  
    fetchData();
  }, []
  )
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      console.log("1222222", data);
    });
  }, [socket]);

  return (
    <>
      <HomePageComponent />
      <button onClick={() => {
        {
          !query ? socket.emit("sendMsg", { room, msg: "tesdfsdfsdf"}) : socket.emit("sendMsg", { room: Number(query), msg: "tesdfsdfsdf"});
        }
        
      }
      }>Click</button>
    </>
  );
}

export default App;
