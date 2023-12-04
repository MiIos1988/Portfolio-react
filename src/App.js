import { useEffect, useState } from "react";
import HomePageComponent from "./pages/HomePageComponent";
import takeIt from "./service/takeIt";
import io from "socket.io-client";
import { useSearchParams } from "react-router-dom";
import ChatComponent from "./components/ChatComponent/ChatComponent";
import axios from "axios";
import moment from 'moment-timezone';

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
        const time = moment.tz(new Date(), 'Europe/Belgrade').format('HH:mm:ss');
       !query ? socket.emit("enterRoom", {dataIp, query, room, time}) : socket.emit("enterRoom", {dataIp, query, room: Number(query), time})
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
