import { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  const [dmode, setdmode] = useState("light");
 
  const [mode, setmode] = useState({
    backgroundColor: "white",
    color: "black",
  });
  function togglemode() {
    if (mode.backgroundColor === "white") {
      setmode({
        backgroundColor: "#282828",
        color: "white",
      });
      document.body.style.backgroundColor = "#282828";
      document.body.style.color = "white";
      setdmode("dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setdmode("light");
      setmode({
        backgroundColor: "white",
        color: "black",
      });
    }
  }


//  TO SHOW ALERT BOX 
  const [alert, setalert] = useState(null)
  const showalert = () => {
    setalert("dark mode enabled");
  };

  setTimeout(() => {
    setalert(null);
 }, 5000);





  return (
    <div className="blank">
      <Navbar title="heading" cdmode={dmode} changemode={togglemode} />
      <Alert showalert={showalert} alert={alert} />
      <TextForm heading="text changer" showalert={showalert} cdmode={mode} />
    </div>
  );
}

export default App;
