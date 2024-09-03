import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Sidebar = ({ isDesktop }) => {
  const navigate = useNavigate(); // Create a navigate function

  // Handler function to navigate to a specific route
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`lg:flex lg:${isDesktop ? 'w-1/4' : 'hidden'} w-1/4 p-4 flex-col justify-between`}
      style={{ background: 'black' }}
    >
      <div style={{ position: 'fixed' }}>
        <div>
          <img 
           onClick={() => handleNavigation('/')}
          src="/iqlogo.png" className="w-36 h-auto" alt="Logo" />
          <nav className="space-y-4 mt-5">
            <div
              className={`flex flex-col items-start justify-start gap-[38px] z-[1] text-left text-13xl text-white font-text-md-medium`}
            >
              <button
                onClick={() => handleNavigation('/services')}
                className="cursor-pointer fw-bold nav-link text-white"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation('/specialisations')}
                className="cursor-pointer fw-bold nav-link text-white"
              >
                Specialisations
              </button>
              <button
                onClick={() => handleNavigation('/whyIQ')}
                className="cursor-pointer fw-bold nav-link text-white"
              >
                WhyIQ
              </button>
              <button
                onClick={() => handleNavigation('/contactUs')}
                className="cursor-pointer fw-bold nav-link text-white"
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
