import { useEffect } from "react";
import HomePageComponent from "./pages/HomePageComponent";
import takeIt from "./service/takeIt";
import io from "socket.io-client";
import { useSearchParams } from "react-router-dom";

const socket = io.connect("http://localhost:5500");

function App() {
  const [queryParams] = useSearchParams();
  useEffect(() => {
    const fetchData = async () => {
    const query = queryParams.get("room");
      try {
        const ip = await takeIt();
        socket.emit("enterRoom", {ip, query});
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
