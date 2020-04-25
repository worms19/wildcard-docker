import React, {useEffect} from 'react';
import wildcardClient, {endpoints} from "@wildcard-api/client";
function Resume(props) {

    const resumeDataStatic = props.resumeData;
    const [resumeData, setResumeData] = React.useState([]);
    const [workData, setWorkData] = React.useState([]);
    wildcardClient.serverUrl = 'http://localhost:8000';

    async function fetchData() {
        const resume = await endpoints.getEducationObject();
        const work = await endpoints.getWorkObject();

        console.log('resume', resume);
        console.log('work', work);
        setResumeData(resume);
        setWorkData(work);
        console.log('rsData' ,resumeData);
    }

    async function buttonFunction () {
        const resume = await endpoints.writingWork();
        console.log('rr', resume);
    }

    useEffect(() => {
        console.log('use effect3');
        (async function anyNameFunction() {
            await fetchData();
        })();
    }, []);


    return (
      <section id="resume">
         <div className="row education">
             <button onClick={buttonFunction}> TEST </button>
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                  resumeData && resumeData.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
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
                  workData && workData.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>

                          {item.Achievements.map(i => {
                              return <p>{i}</p>;
                          })
                          }

                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
               <p>
               {resumeDataStatic.skillsDescription}
               </p>
   				<div className="bars">
   				   <ul className="skills">
                {
                    resumeDataStatic.skills && resumeDataStatic.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }
   					</ul>
   				</div>
   			</div>
         </div>
      </section>
    );
}

export default Resume;