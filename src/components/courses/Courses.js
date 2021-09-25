import React,{useState} from 'react';
import "./Courses.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

var s1="Do you want to experience what it is to go from idea to code? If so, this is the place for you! This is the first course in the Coding for Designers, Managers, and Entrepreneurs Specialization, which is specifically designed for you, if you’re a hands-on collaborator with developers. In this course, we’re going to focus on going from design to code with HTML & CSS, two core building blocks for pretty much everything on the web. You'll build creative confidence and competence that will make you an even better collaborator on digital projects. This course was developed at the Darden School of Business at the University of Virginia and is taught by top-ranked faculty.";
var s2="Do you want to experience what it is to go from idea to code? If so, this is the place for you! This is the second course in the Coding for Designers, Managers, and Entrepreneurs Specialization. If you’re a hands-on collaborator with developers, this course is specifically designed for you. In this course, we’re going to focus on creating interactive user interfaces (UI’s) with Javascript, building creative confidence and competence that will make you an even better collaborator on digital projects. This course was developed at the Darden School of Business at the University of Virginia and is taught by top-ranked faculty.";
var s3="Do you want to experience what it is to go from idea to code? If so, this is the place for you! This is the third course in the Coding for Designers, Managers, and Entrepreneurs Specialization. If you’re a hands-on collaborator with developers, this course is specifically designed for you. In this course, we’re going to focus on creating application logic (controllers) with Javascript, including interfaces to external API's and resources you can leverage to do a lot quickly. Coding for Designers, Managers, and Entrepreneurs III and its specialization will help you build a creative confidence and competence that will make you an even better collaborator on digital projects. This course was developed at the Darden School of Business at the University of Virginia and is taught by top-ranked faculty";


function Courses() {
    const [trunc1,setTrunc1]=useState(true);
    const [trunc2,setTrunc2]=useState(true);
    const [trunc3,setTrunc3]=useState(true);
    function f1()
    {
        setTrunc1(!trunc1);
    }
    function f2()
    {
        setTrunc2(!trunc2);
    }
    function f3()
    {
        setTrunc3(!trunc3);
    }
    return (
        <div className="courses">
            <div className="head-courses"><b>There are 3 courses in this Specialization</b></div>
            <div className="course">
                <div className="course-left">
                <p className="top-grey"> COURSE</p>
                <p className="nomiddle"> 1 </p>
                </div>
                <div className="course-right">
              <div className="heading-right">
              <h3 className="blue-head">
                  Coding for Designers,Managers and Entrepreneur I
              </h3>
              </div>
              <div className="rating-right">
              <p className="couse-inline">
                 <span className="yellow-course">	<span>&#x2605;</span><span>&#x2605;</span><span>&#x2605;</span><span>&#x2605;</span><span>&#x2606;</span> </span> </p>
                 <p className="couse-inline" id="dark"> <b>4.0</b> </p>
                    <p className="couse-inline">35 ratings  </p> 
                    <p className="couse-inline">
                    ▪
                    </p>
                    <p className="couse-inline">
                        12 reviews
                    </p>
                
            
              </div>
              <div >
             <p className={trunc1?"no-pad-desc":"pad-desc"}>{trunc1?s1.slice(0,300):s1}</p>
             <button onClick={f1} className={trunc1?"about-right-trunc":"about-right-full"}><b>SHOW ALL</b></button>
              </div>
                </div>
            </div>
            <div className="course">
                <div className="course-left">
                <p className="top-grey"> COURSE</p>
                <p className="nomiddle"> 2 </p>
                </div>
                <div className="course-right">
              <div className="heading-right">
              <h3 className="blue-head">
                  Coding for Designers,Managers and Entrepreneur II
              </h3>
              </div>
              <div className="rating-right">
              <p className="couse-inline">
                 <span className="yellow-course">	<span>&#x2605;</span><span>&#x2605;</span><span>&#x2605;</span><span>&#x2605;</span><span>&#x2606;</span>  </span> </p>
                 <p className="couse-inline" id="dark"> <b>4.0</b> </p>
                    <p className="couse-inline">13 ratings  </p> 
                    <p className="couse-inline">
                    ▪
                    </p>
                    <p className="couse-inline">
                        5 reviews
                    </p>
                
            
              </div>
              <div >
             <p className={trunc2?"no-pad-desc":"pad-desc"}>{trunc2?s2.slice(0,292):s2}</p>
             <button onClick={f2} className={trunc2?"about-right-trunc":"about-right-full"}><b>SHOW ALL</b></button>
              </div>
                </div>
            </div>
            <div className="course">
                <div className="course-left">
                <p className="top-grey"> COURSE</p>
                <p className="nomiddle"> 3 </p>
                </div>
                <div className="course-right">
              <div className="heading-right">
              <h3 className="blue-head">
                  Coding for Designers,Managers and Entrepreneur III
              </h3>
              </div>
            
              <div >
             <p className={trunc3?"no-pad-desc":"pad-desc"}>{trunc3?s3.slice(0,290):s3}</p>
             <button onClick={f3} className={trunc3?"about-right-trunc":"about-right-full"}><b>SHOW ALL</b></button>
              </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;
