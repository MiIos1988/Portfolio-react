import { useEffect, useState } from "react";
import HomePageComponent from "./pages/HomePageComponent";
import takeIt from "./service/takeIt";
import io from "socket.io-client";
import { useSearchParams } from "react-router-dom";
import ChatComponent from "./components/ChatComponent/ChatComponent";

const socket = io.connect("http://localhost:5500");

function App() {
  
  const [room, setRoom] = useState(Math.floor(Math.random() * 900000) + 100000);
  const [queryParams] = useSearchParams();
  const query = queryParams.get("room");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ip = await takeIt();
       !query ? socket.emit("enterRoom", {ip, query, room}) : socket.emit("enterRoom", {ip, query, room: Number(query)})
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };
  
    fetchData();
  }, []
  )
  

  return (
    <>
      <HomePageComponent />
      <ChatComponent socket={socket} room={room}/>
    </>
  );
}

export default App;
