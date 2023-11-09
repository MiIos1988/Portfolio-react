import { useEffect, useState } from "react";
import HomePageComponent from "./pages/HomePageComponent";
import takeIt from "./service/takeIt";
import io from "socket.io-client";
import { useSearchParams } from "react-router-dom";
import ChatComponent from "./components/ChatComponent/ChatComponent";
import axios from "axios";

const socket = io.connect("https://server-for-chat-zmy4.onrender.com");

function App() {
  
  const [room, setRoom] = useState(Math.floor(Math.random() * 900000) + 100000);
  const [queryParams] = useSearchParams();
  const query = queryParams.get("room");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ip = await takeIt();
        const dataIp = await axios.get(`https://ipapi.co/${ip}/json/`);
       !query ? socket.emit("enterRoom", {dataIp, query, room}) : socket.emit("enterRoom", {dataIp, query, room: Number(query)})
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
