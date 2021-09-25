


import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/dashboard/Dashboard";
import"./App.css";

import Learning from "./components/learning/Learning";
import Famous from "./components/famous/Famous";
import  Spec from "./components/Spec-working/Spec";
import Courses from "./components/courses/Courses";
import Question from "./components/questions/Question";
import Instructor from "./components/instructor/Instructor";
import Offered from "./components/offered/Offered";
import Certificate from "./components/certificate/Certificate";
import Footer from "./components/footer/Footer";

import OutsideClickHandler from "react-outside-click-handler";
import SearchBar from "./components/Search";
import BookData from "./Data.json";

const posts = [
  { id: '1', name: 'Coding for Designers,Managers and Entrepreneurs' },
  { id: '2', name: 'Google Data Analytics' },
  { id: '3', name: 'Coding for Designers,Managers and Entrepreneurs II' },
  { id: '4', name: 'Coding for Designers,Managers and Entrepreneurs III' },
];




const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    console.log(height,"hh")
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
  
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  
  const scrollTo = (ele) => {
    if(ele )
   { ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
   
    });}
  };





function App() {

  const [visibleSection, setVisibleSection] = useState();
  const headerrRef=useRef(null);
  const learningsRef=useRef(null);
  const howsRef=useRef(null);
  const coursesRef=useRef(null);
  const instructorsRef=useRef(null);
  const enrollmentsRef=useRef(null);
  const faqsRef=useRef(null);
  const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const toggle = () => setIsOpen(!isOpen);
    const [hidden,setHidden]=useState(false);

  const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};


  const sectionRefs=[
   { section: "learnings", ref: learningsRef},
   { section: "hows", ref: howsRef },
   { section: "courses", ref: coursesRef },
   { section: "instructors", ref: instructorsRef },
   { section: "enrollments", ref: enrollmentsRef },
   { section: "faqs", ref: faqsRef }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerrRef.current);
      const scrollPosition = window.scrollY + headerHeight + 70;
  
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        console.log("a", ele)
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          console.log(offsetBottom, offsetTop);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      console.log(selected, "--")
      console.log(sectionRefs)
  
      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
 

  return (
    <Router>
    <div className="App">
      
   <Header /> 
   
      <SearchBar placeholder="What do you want to learn?" data={BookData} />
    
  {/*<Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
          <OutsideClickHandler
          onOutsideClick={()=>{
            setHidden(false);
          }}
           >
            <ul className="ul-app" >
                {filteredPosts.map(post => (
                    <p className="li-app" key={post.key}>{post.name}</p>
                  
                ))}
            </ul>
                </OutsideClickHandler >  */}

      <Dashboard />  
      <div className="foot">
     
     <div className="foot-left">
     <div className="photo">
          <img className="photo-uni-w"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFt_USK430oIScCpTzQDugJBm2RBvFjH_kQ&usqp=CAU"/>
             </div>
             <div className="col-div">
<h3>Coding for Designers,Managers and Entrepreneurs Specialization</h3>
<p>
  University of Virginia
</p>
</div>
     </div>
     <div className="foot-right">
     <div className="enrolbtn-foot">
                
                <h4> <span className="enrolnow"> Enroll  for  Free</span> <span className="pad-ex-cert">Starts Sep 15</span></h4>
               
              
            </div>
     </div>
   </div>
   <div className="foot2">
     
     <div className="foot-left">
     
             <div className="col-div">
<h4>Coding for Designers,Managers and Entrepreneurs Specialization</h4>
<p>
  University of Virginia
</p>
</div>
     </div>
     <div className="foot-right">
     <div className="enrolbtn">
                
                <h4> <span className="enrolnow-2"> Enroll  for  Free</span></h4>
                <h5> <span className="pad-ex-cert-2">Starts Sep 15</span></h5>
               
              
            </div>
     </div>
   </div>
            <div className="sticky">
        
        <div className="headerr" ref={headerrRef}>
      <button type="button" id="pp"
          className={`header_link ${
            visibleSection === "learnings" ? "selected" : ""}`}
      onClick={()=>{
          scrollTo(learningsRef.current);
      }}>About</button>

      <button type="button"
          className={`header_link ${
            visibleSection === "hows" ? "selected" : ""}`}
      onClick={()=>{
          scrollTo(howsRef.current);
      }}
      >How it works</button>

      <button type="button"
          className={`header_link ${
            visibleSection === "courses" ? "selected" : ""}`}
      onClick={()=>{
          scrollTo(coursesRef.current);
      }}
      >Courses</button>

      <button type="button"
          className={`header_link ${
            visibleSection === "instructors" ? "selected" : ""}`}

      onClick={()=>{
          scrollTo(instructorsRef.current);
      }}
      >Instructors</button>

      <button type="button"
          className={`header_link ${
            visibleSection === "enrollments" ? "selected" : ""}`}

      onClick={()=>{
          scrollTo(enrollmentsRef.current);
      }}
      >Enrollment Options</button>

      <button type="button"
          className={`header_link ${
            visibleSection === "faqs" ? "selected" : ""}`}
      onClick={()=>{
          scrollTo(faqsRef.current);
      }}
      >FAQ</button>
          </div>
          
          
      </div>
      
      <div className="section" id="learnings" ref={learningsRef}>

        <Learning />
        </div>
      
      <Famous />
          
        
          <div  className="section" id="hows" ref={howsRef}>
        <Spec/> 
        </div>
        
      
    
     <div className="section" id="courses" ref={coursesRef }>
    
    <Courses />

     </div>
   
     
     <div className="section" id="instructors" ref={instructorsRef} >
    <Instructor />
    </div>
  
     
    <Offered /> 
    
     
   
     <div  className="section" id="enrollments"  ref={enrollmentsRef} >
  
 <Certificate/>  
 </div>
    
   
    <div className="section" id="faqs"  ref={faqsRef} >

     <Question /> 
     </div>
 
    <Footer />
 
 
    
   </div>
   </Router>
    
  );
}

export default App;
