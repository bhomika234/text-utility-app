import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from "./Components/Navbar";
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

const ALERT_DURATION = 2000; // 2 seconds
const LIGHT = "light";
const DARK = "dark";

function App() {
  const [mode, setMode] = useState(DARK);
  const [alert, setAlert] = useState(null);

  // Show alert function
  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), ALERT_DURATION);
  };
  const removeBodyClasess=()=>{
document.body.classList.remove('bg-Light')
document.body.classList.remove('bg-dark')
document.body.classList.remove('bg-warning')
document.body.classList.remove('bg-success')
document.body.classList.remove('bg-danger')
  }

  // Toggle dark/light mode
  const toggleMode = (cls) => {
    removeBodyClasess();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
   
    
    if (mode === LIGHT) {
      setMode(DARK);
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode(LIGHT);
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

