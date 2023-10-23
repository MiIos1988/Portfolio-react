import { useEffect } from "react";
import HomePageComponent from "./pages/HomePageComponent";
import takeIt from "./service/takeIt";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5500");

function App() {
  useEffect(() => {
    takeIt();
  }, []
  )
  return (
    <>
      <HomePageComponent />
    </>
  );
}

export default App;
