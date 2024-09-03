import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarContainer from './components/NavbarContainer';
import Sidebar from './pages/pages/Sidebar';
import MainContent from './pages/pages/MainContent';
import Home from './pages/pages/Home';
import OurServices from './pages/pages/OurServices';
import Specialisations from './pages/pages/OurSpecialisations';
import WhyIQ from './pages/WhyIQ';
import Contactus from './pages/pages/Contactus';

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [step, setStep] = useState(1);
  return (
    <>
      {isDesktop ? "" : <NavbarContainer isDesktop={isDesktop} />}
      <div className={` ${isDesktop ? 'flex' : ''} lg:${isDesktop ? 'flex-col' : 'flex-row'} lg:flex-row h-auto text-white`} style={{ background: "black" }}>
        {isDesktop ? <Sidebar isDesktop={isDesktop} /> : ""}
        <Routes>
          <Route path="/" element={<Home isDesktop={isDesktop} />} />
          <Route path="/services" element={<OurServices step={step} setStep={setStep} isDesktop={isDesktop} />} />
          <Route path="/Specialisations" element={<Specialisations step={step} setStep={setStep} isDesktop={isDesktop} />} />
          <Route path="/WhyIQ" element={<WhyIQ isDesktop={isDesktop} />} />

          <Route path="/Contactus" element={<Contactus isDesktop={isDesktop} />} />



          {/* Add more routes as needed */}
        </Routes>
      </div>
    </>
  );
}

export default App;
