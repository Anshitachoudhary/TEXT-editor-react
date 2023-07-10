import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navabar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router ,Switch,Route } from "react-router-dom"

function App() {
  // yha default use hoti hai usestate() me value
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#16407d';
      showAlert(" Dark mode has been enable", "success");
      document.title = 'TEXTEditor - Dark Mode'
      setInterval(() => {
        document.title = ' INSTALL NOW - TEXTeditor'
      }, 1000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enable", "success");
    }
  }
  return (
    <>

      <Navbar title="TrAnS-TexT" mode={mode} toggleMode={toggleMode} aboutText="about us" />
      <Alert alert={alert} />
      <div className="container my-3">


        <TextForm showAlert={showAlert} heading="TEXT-editor Word-counter Char-counter Remove extra spaces." mode={mode} />

      </div>

    </>
  );
};

export default App;
