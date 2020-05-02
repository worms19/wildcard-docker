import React from 'react';
import './Portfolio.css'

function Porfolio(props){
    let resumeData = props.resumeData;
    return (
      <section id="portfolio">
          <div className="Grid">
              <div className="GridLeft">
                      <div className="twelve columns collapsed">
                          <h1 className="projectTitle">Check Out Some of My Works.</h1>
                          {
                              resumeData.portfolio && resumeData.portfolio.map(item => {
                                  return(
                                      <div className="projectLine">
                                          <p>
                                              <a href={item.url} target="_blank"> {item.name}</a>
                                              {item.description}
                                              {item.url2 &&
                                              <a href={item.url2} target="_blank"> Deployed here</a>
                                              }
                                          </p>
                                      </div>
                                  )
                              })
                          }
                  </div>
              </div>
              <div className="GridRight">
                  <div className="skill">
                      <div className="three columns header-col">
                          <h1><span>Skills</span></h1>
                      </div>
                      <div className="nine columns main-col">
                          <div className="bars">
                              <ul className="skills">
                                  <div className="skillList">
                                      {
                                          resumeData.skills && resumeData.skills.map((item) => {
                                              return(
                                                  <div className="itemList">
                                                      <em><strong>{item.skillType} :</strong></em>
                                                      <em> {item.skillList}</em>
                                                  </div>
                                              )
                                          })
                                      }
                                  </div>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row section-head">
              <div className="ten columns">
                  <p className="lead">
                      Feel free to contact me for any work or suggestions below
                  </p>
              </div>
          </div>
          <ul className="social">
              {
                  resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                          return(
                              <li key={item.name}>
                                  <a href={item.url} target="_blank"><i className={item.className}/></a>
                              </li>
                          )
                      }
                  )
              }
          </ul>

      </section>
        );
}

export default Porfolio;