import React from 'react';
import './Spec.css';

function Spec() {
    return (
        <div className="spec">
            <div className="head-spec">
            <h2>How the Specialization Works</h2>
            </div>
            <div className="right-left-spec"> 
           <div className="left-spec" >
          <div className="left-spec-1">
           <h2 className="left-spec-h">
           Take Courses
           </h2>
               <p className="left-spec-p">
               A Coursera Specialization is a series of courses that helps you master a skill. To begin, enroll in the Specialization directly, or review its courses and choose the one you'd like to start with. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. It’s okay to complete just one course — you can pause your learning or end your subscription at any time. Visit your learner dashboard to track your course enrollments and your progress.
               </p>
         
          </div>
          <div className="left-spec-2">
          <h2 className="left-spec-h">  Hands-on Project </h2>
               <p className="left-spec-p">
               Every Specialization includes a hands-on project. You'll need to successfully finish the project(s) to complete the Specialization and earn your certificate. If the Specialization includes a separate course for the hands-on project, you'll need to finish each of the other courses before you can start it.
               </p>
        
              </div>
              <div className="left-spec-3">
              <h2 className="left-spec-h"> Earn a Certificate </h2>
               <p className="left-spec-p">
               When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.
               </p>
         
              </div>
           </div>
           <div className="right-spec">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQd3rnI8tOS9KcoR2P48YRdF0mlhcR2OE7w&usqp=CAU" alt="img" />
           </div>
           </div>
        </div>
    )
}

export default Spec;
