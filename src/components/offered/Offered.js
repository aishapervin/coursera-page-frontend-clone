import React from 'react';
import "./Offered.css";

function Offered() {
    return (
        <div className="offered">
           <div className="off">
                <h2 className="ins-off"><b>Offered By</b></h2>
            </div>
            <div className="offer-left-right">
            <div className="proffesor">
                <div className="photo">
             <img className="photo-uni"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFt_USK430oIScCpTzQDugJBm2RBvFjH_kQ&usqp=CAU"/>
                </div>
                </div>
           <div className="uni-dess">
              
              <h2 className="uni-ver"><b>University Of Virginia</b></h2>
            <p className="desc-uni">A premier institution of higher education, The University of Virginia offers outstanding academics, world-class faculty, and an inspiring, supportive environment. Founded by Thomas Jefferson in 1819, the University is guided by his vision of discovery, innovation, and development of the full potential of students from all walks of life. Through these courses, global learners have an opportunity to study with renowned scholars and thought leaders.</p>
            </div> 
           </div>
         
        </div>
    )
}

export default Offered;
