
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from "./Components/Navbar";
import Textform from './Components/Textform';
import Alert from './Components/Alert';

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

  // ✅ Handle side effects properly
  useEffect(() => {
    if (mode === DARK) {
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  }, [mode]);

  return (
    <>
      <Navbar 
        title="TextUtils" 
        mode={mode} 
        toggleMode={toggleMode} 
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <Textform
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
