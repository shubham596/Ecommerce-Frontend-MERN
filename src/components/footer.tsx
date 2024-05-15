// import { Link } from "react-router-dom";

// const Footer = () => {

//   return (
//     <nav className="footer">
//     <ul>
//         <li>Contact us</li>
//         <li>lINKEDIN</li>
//         <li>Copyright ©2024; Designed by Shubham Sharan</li>
//         <li></li>
//     </ul>
//     </nav>
//   );
// };

// export default Footer;

import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="footerContainer">
        <div className="socialIcons">
        <a href="mailto:shrivastavashubham596@gmail.com" title='Gmail'><i className="fas fa-envelope"></i> </a>
<a href="https://instagram.com/_shubham_shrivastava" target="_blank" title='instagram' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
<a href="https://www.linkedin.com/in/shrivastavashubham596/" target="_blank" title='Linkedin' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
<a href="/contactus"><i className="fas fa-address-book" title='Contact Me'></i></a>
        </div>
      
    </div>
    <div className="footerBottom">
        <p>Copyright &copy;2023; Designed by <span className="designer">Shubham</span></p>
    </div>
</footer>
  )
}

export default Footer