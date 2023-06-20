import { useState } from "react";
import Navbar from "./components/layout/navbar/navbar";
import Home from "./components/page/home/home";




function App() {

  const [saludo1, setSaludo1] = useState("Hola buenos dias!");

  const responder = (respuesta) => {
    setSaludo1(respuesta)
  }

  return (
    <>
      <Navbar />
      <Home saludo1={saludo1} responder={responder} />
    </>
  );
}

export default App;

