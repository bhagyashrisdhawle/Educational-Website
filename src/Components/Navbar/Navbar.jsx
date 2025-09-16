import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  // dynamic styling for dark nav

  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])
// when we scroll webpage 50px it will change clr
  return (
    <>
      <nav className={`container ${sticky ?'dark-nav' : ''}`}>
      {/* <nav className="container dark-nav"> */}
        {/* <h1>Navbar</h1> */}
        <img src={logo} alt="" className="logo" />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className="btn">Contact Us</button></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;