import React from 'react'

export default function header() {
  return (
    <div>
  <header id="header">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        {/* <h1><a href="/">Updown<span>.</span></a></h1> */}
         <a href="/">
            <img src="/assets/logo/updown.png" alt="" className="img-fluid"/> 
         </a>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About Us</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#">Get App</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

    </div>
  )
}
