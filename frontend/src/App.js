import React, {useEffect} from 'react';
import './App.css';
import wildcardClient, {endpoints} from '@wildcard-api/client';
import Header from "./components/Header";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import resumeData from "./resumeData";
import ContactUs from "./components/ContactUs";


function App() {

  wildcardClient.serverUrl = 'http://localhost:8000';
  const [fecth, setFech] = React.useState('');
  const [counter, setCounter] = React.useState(0);

    async function fetchData() {
        const msg = await endpoints.myFirstEndpoint();
        setFech(msg.msg);
    }

    useEffect(() => {
        console.log('use effect');
        fetchData();
    }, []);

    useEffect(() => {
        console.log('use effect 2');
    }, [counter]);

  return (
    <div className="App">
        <Header resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
    </div>

  );
}

export default App;
