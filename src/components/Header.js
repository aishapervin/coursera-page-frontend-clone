
import React, { useState } from "react";
import { MdFormatLineSpacing } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import "./Header.css";


function Header() {
const [show,setShow]=useState(false);
const [show2,setShow2]=useState(false);


const showing=()=>{
    setShow(!show);
}
const showing2=()=>{
    setShow2(!show2);


  
     
        

}
    return (
        <div className="main-header">
             <div className="hidden">
               
             <div className={show?"button-toggle":"button-toggle-not"}>
              
                   <MdFormatLineSpacing className="show-1" onClick={showing}/>
               
                </div>
            <div className={show?"head-coursera":"head-coursera-not"}>
                <h2>Coursera</h2>
            </div>
            <div className={show?"button-2-toggle-not":"button-2-toggle"}>
             
                   <ImCross onClick={showing} id="kk" />
               
                </div>
            </div>
      {/*    <div className={show?"dropdown-content-2":"dropdown-content-2-not"}>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a  href="#">Link 3</a>
    </div> */}
            <div className={show?"header-1-not":"header-1"}>
                <div className="logo">
            <img className="logoimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg2cCJSkb9VN78Tr2mQxrfVGArUdSLlOeIg&usqp=CAU" />
            </div>
            <div className="dropdown">
          
  <button className={"dropbtn"}>Explore </button>
  <div className={show2?"dropdown-content":"dropdown-content-not"}>
    <button className="explore-more">
        link1
       
        
       
            <div className="explore-more-inner">
          
         <div className="e-inner">
                  link1-a             </div>
        <div className="e-inner">
                  link1-b             </div>
         <div className="e-inner">
                  link1-c             </div>
        </div>
        
        </button>
    <button className="explore-more">Link 2</button>
    <button className="explore-more">Link 3</button>
    <button className="explore-more">Link 4</button>
    <button className="explore-more">Link 5</button>
  </div>

            </div>

      
          
            </div>
            <div className={show?"header-2-not":"header-2"}>
    <div> <button className="p-header-1">For enterprise</button>
    <div className="enter-inner">
        <p>Enterprise inner1</p>
        <p>Enterprise inner2</p>
    </div>
    </div>
      <button className="p-header-2">For students</button>
      <button className="p-header-log" >Log in</button>
      <button className="p-header-btn">Join for Free</button>
            </div>
           
        </div>
    )
}

export default Header;
