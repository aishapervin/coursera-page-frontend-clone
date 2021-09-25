import React,{useState} from 'react';
import "./Question.css";
var s1="If you subscribed, you get a 7-day free trial during which you can cancel at no penalty. After that, we don’t give refunds, but you can cancel your subscription at any time. See our full refund policy.";
var s2="Yes! To get started, click the course card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate, or you can audit it to view the course materials for free. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. Visit your learner dashboard to track your progress. ";
var s3="Yes, Coursera provides financial aid to learners who cannot afford the fee. Apply for it by clicking on the Financial Aid link beneath the Enroll button on the left. You'll be prompted to complete an application and will be notified if you are approved. You'll need to complete this step for each course in the Specialization, including the Capstone Project. Learn more.";
var s4="When you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. If you only want to read and view the course content, you can audit the course for free. If you cannot afford the fee, you can apply for financial aid.";
var s5="This course is completely online, so there’s no need to show up to a classroom in person. You can access your lectures, readings and assignments anytime and anywhere via the web or your mobile device.";
var s6="This Specialization doesn't carry university credit, but some universities may choose to accept Specialization Certificates for credit. Check with your institution to learn more.";
var s7="Eleven weeks. Course I is five weeks, and Courses I & II are both three weeks.";
var s8="None. This course is designed for anyone that wants to be creative in digital and it doesn't assume any prior knowledge.";
var s9="Yes- we highly recommend taking them in order. ";
var s10="You will be able to go from idea to code, and that's what's fundamentally most important. You'll practice that using HTML, CSS, and Javascript.";
function Question() {
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
function f4()
{
    setTrunc4(!trunc4);
}
function f5()
{
    setTrunc5(!trunc5);
}
function f6()
{
    setTrunc6(!trunc6);
}
function f7()
{
    setTrunc7(!trunc7);
}
function f8()
{
    setTrunc8(!trunc8);
}
function f9()
{
    setTrunc9(!trunc9);
}
function f10()
{
    setTrunc10(!trunc10);
}
    const [trunc1,setTrunc1]=useState(true);
    const [trunc2,setTrunc2]=useState(true);
    const [trunc3,setTrunc3]=useState(true);
    const [trunc4,setTrunc4]=useState(true);
    const [trunc5,setTrunc5]=useState(true);
    const [trunc6,setTrunc6]=useState(true);
    const [trunc7,setTrunc7]=useState(true);
    const [trunc8,setTrunc8]=useState(true);
    const [trunc9,setTrunc9]=useState(true);
    const [trunc10,setTrunc10]=useState(true);
    return (
   <div className="main-question">
       <h2 className="que-head">Frequently Asked Questions
           </h2>
        <div className="questions">
              <div className="question-area">
              <button onClick={f1} className={trunc1?"about-right-trunc-1":"about-right-full-que-1"}><span className="blue-arr"> &#9002;</span>&nbsp;  What is the refund policy?</button>
              <button onClick={f1} className={!trunc1?"about-right-full-que-2":"about-right-trunc-2"}><span className="blue-arr">&#x2228;</span>&nbsp;  What is the refund policy?</button>
             <p>{trunc1?s1.slice(0,0):s1}</p>
            
              </div>
              <div className="question-area">
              <button onClick={f2} className={trunc2?"about-right-trunc-1":"about-right-full-que-1"}><span className="blue-arr"> &#9002;</span>&nbsp;  Can I just enroll in a single course?</button>
              <button onClick={f2} className={!trunc2?"about-right-full-que-2":"about-right-trunc-2"}><span className="blue-arr">&#x2228;</span>&nbsp;  Can I just enroll in a single course?</button>
             <p>{trunc2?s2.slice(0,0):s2}</p>
            
              </div>
              <div className="question-area">
              <button onClick={f3} className={trunc3?"about-right-trunc-1":"about-right-full-que-1"}><span className="blue-arr"> &#9002;</span>&nbsp; Is financial aid available?</button>
              <button onClick={f3} className={!trunc3?"about-right-full-que-2":"about-right-trunc-2"}><span className="blue-arr">&#x2228;</span>&nbsp; Is financial aid available?</button>
             <p>{trunc3?s3.slice(0,0):s3}</p>
            
              </div>
              <div className="question-area">
              <button onClick={f4} className={trunc4?"about-right-trunc-1":"about-right-full-que-1"}><span className="blue-arr"> &#9002;</span>&nbsp;  Can I take the course for free?</button>
              <button onClick={f4} className={!trunc4?"about-right-full-que-2":"about-right-trunc-2"}><span className="blue-arr">&#x2228;</span>&nbsp; Can I take the course for free?</button>
             <p>{trunc4?s4.slice(0,0):s4}</p>
            
              </div>
              <div className="question-area">
              <button onClick={f5} className={trunc5?"about-right-trunc-1":"about-right-full-que-1"}><span className="blue-arr"> &#9002;</span>&nbsp;  Is this course really 100% online? Do I need to attend any classes in person?</button>
              <button onClick={f5} className={!trunc5?"about-right-full-que-2":"about-right-trunc-2"}><span className="blue-arr">&#x2228;</span>&nbsp;  Is this course really 100% online? Do I need to attend any classes in person?</button>
             <p>{trunc5?s5.slice(0,0):s5}</p>
            
              </div>
              <div className="question-area">
              <button onClick={f6} className={trunc6?"about-right-trunc-1":"about-right-full-que-1"}><span className="blue-arr"> &#9002;</span>&nbsp;  Will I earn university credit for completing the Specialization?</button>
              <button onClick={f6} className={!trunc6?"about-right-full-que-2":"about-right-trunc-2"}><span className="blue-arr">&#x2228;</span>&nbsp; Will I earn university credit for completing the Specialization?</button>
             <p>{trunc6?s6.slice(0,0):s6}</p>
            
              </div>
              <div className="question-area">
              <button onClick={f7} className={trunc7?"about-right-trunc-1":"about-right-full-que-1"}><span className="blue-arr"> &#9002;</span>&nbsp;  How long does it take to complete the Specialization?</button>
              <button onClick={f7} className={!trunc7?"about-right-full-que-2":"about-right-trunc-2"}><span className="blue-arr">&#x2228;</span>&nbsp;  How long does it take to complete the Specialization?</button>
             <p>{trunc7?s7.slice(0,0):s7}</p>
            
              </div>
              <div className="question-area">
              <button onClick={f8} className={trunc8?"about-right-trunc-1":"about-right-full-que-1"}><span className="blue-arr"> &#9002;</span>&nbsp;  What background knowledge is necessary?</button>
              <button onClick={f8} className={!trunc8?"about-right-full-que-2":"about-right-trunc-2"}><span className="blue-arr">&#x2228;</span>&nbsp;  What background knowledge is necessary?</button>
             <p>{trunc8?s8.slice(0,0):s8}</p>
            
              </div>
              <div className="question-area">
              <button onClick={f9} className={trunc9?"about-right-trunc-1":"about-right-full-que-1"}><span className="blue-arr"> &#9002;</span>&nbsp;  Do I need to take the courses in a specific order?</button>
              <button onClick={f9} className={!trunc9?"about-right-full-que-2":"about-right-trunc-2"}><span className="blue-arr">&#x2228;</span>&nbsp; Do I need to take the courses in a specific order?</button>
             <p>{trunc9?s9.slice(0,0):s9}</p>
            
              </div>
              <div className="question-area">
              <button onClick={f10} className={trunc10?"about-right-trunc-1":"about-right-full-que-1"}><span className="blue-arr"> &#9002;</span>&nbsp;  What will I be able to do upon completing the Specialization?</button>
              <button onClick={f10} className={!trunc10?"about-right-full-que-2":"about-right-trunc-2"}><span className="blue-arr">&#x2228;</span>&nbsp;  What will I be able to do upon completing the Specialization?</button>
             <p>{trunc10?s10.slice(0,0):s10}</p>
            
              </div>
                </div>
                </div>
        
    )
}

export default Question;
