
import react from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Famous.css";
import Item from "./Item";



const items= [
    {id: 1,name:"O William" ,src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwP1Je6fJdKG_xhgneb0Bwqj0m4mm8DJ6Sg&usqp=CAU',
    data:'Coursera gave me confidence and help me see that i can learn anything if i put my mind into it.This helped me break into a new industry.'},
    {id: 2,name:"Antonio hether", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMJQlJpt5Ov8KdVbXLujKtQCJGdXVD_gYDQ&usqp=CAU',
    data:'I got hooked with everything going on in the course,from course content and TA feedback to meetup events and the professors twitter feed'},
    {id: 3,name:"Franklin Rose", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3wcFJWs-479bzXTGCMm-exy9eNQ-G31SEA&usqp=CAU',
    data:'These courses,from leading institutions all over the world,are only accessible to me through coursersa.I learn something new and fascinating every day.'},
  
  ];

function Famous() {

    
      
    
    return (
     <div className="famous">
   <Carousel infiniteLoop show={2}>
     <Item>
     <div className="jj"><img className="caro-img" src={items[0].src} /></div>
     <div className="jj-2"><p>{items[0].data}</p></div>
     <div className="name-caro">~{items[0].name}</div>
     </Item>
     <Item>
     <div  className="jj"><img src={items[1].src} /></div>
     <div className="jj-2"><p>{items[1].data}</p></div>
     <div className="name-caro">~{items[1].name}</div>
     </Item>
     <Item>
     <div  className="jj"><img src={items[2].src} /></div>
     <div className="jj-2"><p>{items[2].data}</p></div>
     <div className="name-caro">~{items[2].name}</div>
     </Item>
   </Carousel>
     </div>
    )
}

export default Famous;
