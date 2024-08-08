import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = ({ isDesktop }) => (
  <div className={`lg:flex  lg:${isDesktop ? ' w-1/4' : 'hidden'}   w-1/4  p-4 flex-col justify-between`} style={{background:"black"}}>
    <div style={{ position: "fixed" }}>
      <div>
      <img src="/iqlogo.png" className="w-36 h-auto" />

        <nav className="space-y-4 mt-5">
        <div
      className={`flex flex-col items-start justify-start gap-[38px] z-[1] text-left text-13xl text-white font-text-md-medium `}
    >
        <Link to="services" spy={true} smooth={true} className="cursor-pointer fw-bold nav-link text-white ">Services</Link>
          <Link to="specialisations" spy={true} smooth={true} className="cursor-pointer fw-bold  nav-link text-white">Specialisations</Link>
          <Link to="whyIQ" spy={true} smooth={true} className="cursor-pointer fw-bold  nav-link text-white">WhyIQ</Link>
          <Link to="contactUs" spy={true} smooth={true} className="cursor-pointer fw-bold  nav-link text-white">Contact Us</Link>
      </div>
      </nav>
      </div>
    </div>
  </div>
);

export default Sidebar;
