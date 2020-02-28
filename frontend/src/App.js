import React, {useEffect} from 'react';
import './App.css';
import wildcardClient, {endpoints} from '@wildcard-api/client';
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";


function App() {

  wildcardClient.serverUrl = 'http://localhost:8000';
  const [fecth, setFech] = React.useState('');
  const [counter, setCounter] = React.useState(0);

    async function fetchData() {
        const msg = await endpoints.myFirstEndpoint();
        setFech(msg.msg);
        setCounter(counter + 1);
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
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
    </div>
  );
}

export default App;
