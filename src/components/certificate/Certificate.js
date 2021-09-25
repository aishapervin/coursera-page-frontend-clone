import React from 'react';
import "./Certificate.css";

function Certificate() {
    return (
        <div className="certificate">
            <div className="cert-left-right">
                <div className="left-cert">
                     <h2 className="cert-left-head"><b>Start Learning Today</b></h2>
                     <p className="blue-aid"><b>Financial Aid Available</b></p>
                     <p className="cert-items"><span className="blue-tick-cert">&#10004;</span>Shareable Specialization and Course Certificates</p>
                     <p className="cert-items"><span className="blue-tick-cert">&#10004;</span>Self-Paced Learning Option</p>
                     <p className="cert-items"><span className="blue-tick-cert">&#10004;</span>Course Videos & Readings</p>
                     <p className="cert-items"><span className="blue-tick-cert">&#10004;</span>Practice Quizzes</p>
                     <p className="cert-items"><span className="blue-tick-cert">&#10004;</span>Graded Assignments with Peer Feedback</p>
                     <p className="cert-items"><span className="blue-tick-cert">&#10004;</span>Graded Quizzes with Feedback</p>
                     <p className="cert-items"><span className="blue-tick-cert">&#10004;</span>Graded Programming Assignments</p>
                     <div className="enrolbtn-cert">
                   
                   <h4> <span className="enrolnow-cert"> Enroll  for  Free</span> <span className="pad-ex-cert-cert">Starts Sep 15</span></h4>
                  
                 
               </div>
                </div>
                <div className="right-cert">
            <p className="link-flex">Sharable on &nbsp;<span>&nbsp;<img className="link-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_4azwj-y839SrP7ToE7BaXP7nlBH8_Fjzw&usqp=CAU" /></span></p>
            <img  className="img-cert" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68dV9UM_13gtr35I7vQdqZ_5A0pY9UEm_ww&usqp=CAU" />
                <p className="cert-desc">You can share your Course Certificates in the Certifications section of your LinkedIn profile, on printed resumes, CVs, or other documents.</p>
                
                </div>
            </div>
            
        </div>
    )
}

export default Certificate;
