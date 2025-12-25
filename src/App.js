import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from "./Components/Navbar";
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { useState, useEffect } from 'react';

const ALERT_DURATION = 1500;
const LIGHT = "light";
const DARK = "dark";

function App() {
  const [mode, setMode] = useState(DARK);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), ALERT_DURATION);
  };

  const toggleMode = () => {
    setMode(prevMode => (prevMode === LIGHT ? DARK : LIGHT));
  };

  useEffect(() => {
    if (mode === DARK) {
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils - Dark Mode";
    } else {
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  }, [mode]);

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
                heading="Enter the text to analyze below"
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

