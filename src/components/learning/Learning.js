import React from 'react';
import "./Learning.css";
import { FaCertificate } from 'react-icons/fa';

import { AiOutlineClockCircle } from 'react-icons/ai';
import {GiNetworkBars } from 'react-icons/gi';
import { AiOutlineSchedule } from 'react-icons/ai';

import { RiMessage2Line } from 'react-icons/ri';
import { IoIosGlobe } from 'react-icons/io';

function Learning() {
    return (
        <div className="learn-main">
            <div className="left-learn">

           
            <div className="left-learn-1">
           <h4 className="learn-head"><b>WHAT YOU WILL LEARN</b></h4>
           <div className="learn-top">
              <div className="learn-top-left">
             <span className="green-tick">&#10004;</span> How to take application designs and translate them into functioning web applications using HTML, CSS, and Javascript
              </div>
              <div className="learn-top-right">
              <span className="green-tick">&#10004;</span> How to evaluate alternative approaches to your coding implementations


              </div>
           </div>
           <div className="learn-bottom">
           <div className="learn-bottom-left">
           <span className="green-tick">&#10004;</span>How to work through coding issues with analytical debugging techniques
             </div>
        <div className="learn-bottom-right">
        <span className="green-tick">&#10004;</span>How to relate your experience to the challenges and decisions faced by individual developers and development teams
                  </div>
           </div>

            </div>
            <div className="left-learn-2">
            <h4 className="learn-head"><b>SKILLS YOU WILL GAIN</b></h4>
            
            <p className="skills">Cascading Style Sheets(CSS)</p>
            <p className="skills">Html</p>
            <p className="skills">Web Design</p>
            <p className="skills">coding</p>
            <p className="skills">Javascript</p>
    
            
            <p className="skills">HTML5</p>
            <p className="skills">User Experience Design(UXD)</p>
            <p className="skills">User Story</p>
            <p className="skills">Rapid Prototyping</p>

            
            <p className="skills">User Interface Design(UI Design)</p>
            <p className="skills">Jquery</p>
            <p className="skills">User Experience(UI)</p>
    
            </div>
            
            <div className="left-learn-3">
           <div className="left-learn-3-up">
            <h2>
                About the Specialization
            </h2>
            <h4 className="greyish-desc-sp">
           2,034 recent views
            </h4>
            <p>
            In this specialization, you will experience what it is to go from idea to code. These courses are specifically created for the manager, designer, or entrepreneur who is an active, hands-on collaborator with developers. By the end of the program, you will be able to build working  software using HTML, CSS, and Javascript. More important, you will build your creative confidence (and competency!) on engaging in digital projects.  
            </p>
           </div>
           <div className="left-learn-3-down">
           <h2 className="sp-margin">
                Applied learning Project
            </h2>
           
            <p>
            Over the three courses in the specialization, you'll design and build  a functioning web application using HTML, CSS, and Javascript. More important, you'll be working from a design brief and exploring the process of going from idea to design to code, including peer reviews. 
            </p>
           </div>
            </div>
            </div>
            <div className="right-learn">
                <div className="icons-plus-desc">
                <div className="icon"><FaCertificate size="30px" /></div>
                <div>
                <h3>Sharable Certificate</h3>
                <p className="greyish-desc">Earn a certificate upon completion</p>
                </div>
                </div>
                <div className="icons-plus-desc">
                <div className="icon"><IoIosGlobe size="30px"/></div>
                <div>
                <h3>100% online courses</h3>
                <p className="greyish-desc">Start instantly and learn at your own schedule.</p>
                </div>
                </div>
                
                <div className="icons-plus-desc">
                <div className="icon"><AiOutlineSchedule size="30px"/></div> 
                <div>
                <h3>Flexible Schedule</h3>
                <p className="greyish-desc">Set and maintain flexible deadlines.</p>
                </div>
                </div> 
                
                <div className="icons-plus-desc">
                <div className="icon"><GiNetworkBars size="30px"/></div>
                <div>
                <h3>Beginner Level</h3>
                <p className="greyish-desc">No prior experience required</p>
                </div> 
                </div>
                
                <div className="icons-plus-desc">
                <div className="icon"><AiOutlineClockCircle size="30px"/></div> 
                <div>
                <h3>Approximately 3 months to complete</h3>
                <p className="greyish-desc">Suggested pace of 5hours/week</p>
                </div> 
                </div>
                
                <div className="icons-plus-desc">
                <div className="icon"><RiMessage2Line size="30px"/></div>
                <div>
                <h3>English</h3>
                <p className="greyish-desc">Subtitles: English, Arabic, French, Portuguese (European), Italian, Vietnamese, German, Russian, Spanish</p>
                </div>
                </div>
                </div>
        
        
        
       
       
        
                
            </div>
        
    )
}

export default Learning;
