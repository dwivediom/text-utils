import { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
  const [alert, setalert] = useState(null);
  const showalert = () => {
    setalert("dark mode enabled");
  };

  setTimeout(() => {
    setalert(null);
  }, 5000);

  return (
    <Router>
      <div className="blank">
        <Navbar title="Text util" cdmode={dmode} changemode={togglemode} />
        <Alert showalert={showalert} alert={alert} />

        <Routes>
          <Route exact path="/about" element={<About />}/>
            {/* //exact keyword used to match excat page name other wise react cheak partialy and may cause err? */}
        

          <Route exact path="/text-utils/" element={ <TextForm
              heading="text changer"
              showalert={showalert}
              cdmode={mode}
            />}/>
           
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
