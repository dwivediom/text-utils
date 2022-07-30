<<<<<<< HEAD
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Textform from "./components/Textform";
import Alertmessage from "./components/Alertmessage";
import Land from "./components/Land";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  // setInterval(() => {
  //   document.title = "Text Utils is Amazing";
  // }, 500);
  // setInterval(() => {
  //   document.title = "Install Text-Utils";
  // }, 1200);

  const [state, setstate] = useState({
    visible: false,
  });

  const togglealert = () => {
    setstate({
      visible: false,
    });
  };
  const [style, setstyle] = useState({
    backgroundColor: "black",
  });
  const changeback = (color, text) => {
    document.body.style.backgroundColor = color;
    document.body.style.color = text;
  };
  const aboutstyle = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <Router>
        <Nav title={"TextUtils"} changeback={changeback} style={style} />

        <Alertmessage togglealert={togglealert} state={state} />

        <Switch>
          <Route exact path="/Scripter/about">
            <div className="container">
              <About style={aboutstyle} />
            </div>
          </Route>
          <Route exact path="/Scripter/textform">
            <div className="conatiner">
              <Textform />
            </div>
          </Route>

          <Route exact path="/Scripter">
            <Land />
          </Route>
        </Switch>
      </Router>
    </>
=======
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
>>>>>>> 82387f80e94a0ab4a15b5bfd0cfcaa86d64fa924
  );
}

export default App;
