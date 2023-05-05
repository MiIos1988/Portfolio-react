import { useEffect } from "react";
import HomePageComponent from "./pages/HomePageComponent";
import takeIt from "./service/takeIt";

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
