import React, {useEffect} from 'react';
import wildcardClient, {endpoints} from "@wildcard-api/client";
import './Resume.css'

function Resume(props) {

    const resumeDataStatic = props.resumeData;
    const [resumeData, setResumeData] = React.useState([]);
    const [workData, setWorkData] = React.useState([]);
    wildcardClient.serverUrl = 'http://localhost:8000';

    async function fetchData() {
        const [resume, work] = await Promise.all([endpoints.getEducationObject(), endpoints.getWorkObject()]);
        setResumeData(resume);
        setWorkData(work);
    }

    async function buttonFunction () {
        const resume = await endpoints.writingWork();
        console.log('rr', resume);
    }

    useEffect(() => {
        (async function anyNameFunction() {
            await fetchData();
        })();
    }, []);


    return (
      <section id="resume">
         <div className="row education">
               <h1><span>Education</span></h1>
            <div className="nine columns main-col">
              {
                  resumeDataStatic.education && resumeDataStatic.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date"> {item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p className="achievement">
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                  resumeDataStatic.work && resumeDataStatic.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                            {item.specialization}
                            <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving} / {item.MonthOfLeaving} {item.YearOfLeaving}</em>
                          </p>
                           <p className="achievement">{item.Achievements}</p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>

      </section>
    );
}

export default Resume;