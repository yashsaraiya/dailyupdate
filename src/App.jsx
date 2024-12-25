import React, { useState } from 'react';
import Navbar from './Navbar';
import News from './News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  const [mode, setMode] = useState('white');
  const [progress, setProgress] = useState(0);
  
  //            from here
  const toggleMode = () => {
    const newMode = mode === 'white' ? 'dark' : 'white';
    setMode( newMode );
    document.body.style.backgroundColor = newMode === 'white' ? '#ffffff' : '#212529'; // White for light, dark gray for dark
    document.body.style.color = newMode === 'white' ? '#000000' : '#ffffff'; // Adjust text color
  };
  
  const pageSize = 9;
    return (
      <>
        <Router>
          {/* Pass the mode and toggleMode function as props */}

          <Navbar mode={mode} toggleMode={toggleMode} />
          <LoadingBar color='red' shadow="true" height={3} progress={progress}/>
          <Routes>
          
            <Route
              path="/general"
              element={ <News setProgress={setProgress}   key="general" mode={mode} pageSize={pageSize} country="us" category="general" />}
            />
            <Route
              path="/business"
              element={ <News setProgress={setProgress}    key="business" mode={mode} pageSize={pageSize} country="us" category="business" />}
            />
            <Route
              path="/entertainment"
              element={ <News setProgress={setProgress} key="entertainment" mode={mode} pageSize={pageSize} country="us" category="entertainment" />}
            />
            <Route
              path="/health"
              element={ <News setProgress={setProgress}    key="health" mode={mode} pageSize={pageSize} country="us" category="health" />}
            />
            <Route
              path="/science"
              element={ <News setProgress={setProgress}    key="science" mode={mode} pageSize={pageSize} country="us" category="science" />}
            />
            <Route
              path="/sports"
              element={ <News setProgress={setProgress}    key="sports" mode={mode} pageSize={pageSize} country="us" category="sports" />}
            />
            <Route
              path="/technology"
              element={ <News setProgress={setProgress}    key="technology" mode={mode} pageSize={pageSize} country="us" category="Technology" />}
            />
          </Routes>
        </Router>
      </>
    );
  }
export default App