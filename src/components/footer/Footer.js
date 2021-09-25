import React from 'react';
import "./Footer.css";
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';


function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
         <p >&#169;&nbsp;2021 Coursera Inc.All rights reserved.
         </p>
            </div>
            <div className="footer-right">
        <AiFillFacebook className="footer-icon" />
        <AiFillLinkedin className="footer-icon"/>
        <AiFillTwitterSquare className="footer-icon"/>
        <AiFillYoutube className="footer-icon" />
        <FaInstagramSquare className="footer-icon"/>
            </div>
        </div>
    )
}

export default Footer;
