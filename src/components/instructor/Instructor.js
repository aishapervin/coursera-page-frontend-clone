import React from 'react';
import "./Instructor.css";
import { BsFillPeopleFill } from 'react-icons/bs';

import { GiOpenBook } from 'react-icons/gi';
function Instructor() {
    return (
        <div className="instructor">
            <div className="ins">
                <h2 className="ins-ins"><b>Instructor</b></h2>
            </div>
             <div className="proffesor">
                <div className="photo">
             <img className="alex-in"  src="data:image/jpeg;base64,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" />
                </div>
           <div className="name-in">
              
              <h3 className="alex-name-in">Alex Cowan</h3>
            <p className="fac">Faculty & Batten Fellow</p>
            <p className="busi">Darden School Of Business</p>
            <p ><BsFillPeopleFill  className="gre"/>&nbsp;&nbsp;<b>341,066</b>&nbsp;&nbsp;Learners</p>
            <p  ><GiOpenBook  className="gre"/>&nbsp;Courses</p>
           </div>
            </div>
        </div>
    )
}

export default Instructor;
