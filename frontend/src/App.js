import React from 'react';
import './App.css';
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import resumeData from "./resumeData";


function App() {

  return (
    <div className="App">
        <Header resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
    </div>

  );
}

export default App;
