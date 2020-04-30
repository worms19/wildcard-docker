import React from 'react';
function ContactUs(props){
    let resumeData = props.resumeData;
    return (
      <section id="contact">

          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );

}

export default ContactUs;