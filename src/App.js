import { useEffect } from "react";
import HomePageComponent from "./pages/HomePageComponent";
import takeIt from "./service/takeIt";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5500");

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ip = await takeIt();
        socket.emit("enterRoom", ip);
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
    </>
  );
}

export default App;
