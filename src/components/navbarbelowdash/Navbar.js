import React, { useEffect, useRef, useState } from 'react';



import "./Navbar.css";


const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
  
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  
  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


function Navbar() {
    const [visibleSection, setVisibleSection] = useState();
      const headerrRef=useRef(null);
      const learningsRef=useRef(null);
      const howsRef=useRef(null);
      const coursesRef=useRef(null);
      const instructorsRef=useRef(null);
      const enrollmentsRef=useRef(null);
      const faqsRef=useRef(null);
   
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
          const scrollPosition = window.scrollY + headerHeight;
      
          const selected = sectionRefs.find(({ section, ref }) => {
            const ele = ref.current;
            if (ele) {
              const { offsetBottom, offsetTop } = getDimensions(ele);
              return scrollPosition > offsetTop && scrollPosition < offsetBottom;
            }
          });
      
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
    

   
   
    <div className="sticky">
   
   <div className="headerr" ref={headerrRef}>
<button type="button"
    className={`header_link ${
      visibleSection === "learnings" ? "selected" : ""
    }`}
onClick={()=>{
    scrollTo(learningsRef.current);
}}>About</button>

<button type="button"
    className={`header_link ${
      visibleSection === "hows" ? "selected" : ""
    }`}
onClick={()=>{
    scrollTo(howsRef.current);
}}
 >How it works</button>

<button type="button"
    className={`header_link ${
      visibleSection === "courses" ? "selected" : ""
    }`}
 onClick={()=>{
    scrollTo(coursesRef.current);
}}
 >Courses</button>

<button type="button"
    className={`header_link ${
      visibleSection === "instructors" ? "selected" : ""
    }`}

onClick={()=>{
    scrollTo(instructorsRef.current);
}}
 >Instructors</button>

<button type="button"
    className={`header_link ${
      visibleSection === "enrollments" ? "selected" : ""
    }`}

onClick={()=>{
    scrollTo(enrollmentsRef.current);
}}
 >Enrollment Options</button>

<button type="button"
    className={`header_link ${
      visibleSection === "faqs" ? "selected" : ""
    }`}
onClick={()=>{
    scrollTo(faqsRef.current);
}}
 >FAQ</button>
    </div>
    
    
</div>


    )
}

export default Navbar;
