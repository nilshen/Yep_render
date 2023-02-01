import React from "react";
import {FaGithubSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-pic"/>
       <div className="footer-row">
        <a className="footer-row-icon"
          href="https://github.com/nilshen/Yep"
          target="_blank">
          <FaGithubSquare/>
        </a>
  			<a className="footer-row-icon"
          href="mailto:linshen88@gmail.com"
          target="_blank">
          <MdEmail/>
        </a>
  			<a className="footer-row-icon"
          href="https://www.linkedin.com/in/lin-s-3460082a/"
          target="_blank">
  				<FaLinkedin/>
        </a>
        </div>
        
    </div>
)
}
  


  

