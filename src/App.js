import React, { useState, useEffect } from 'react';
// import "./App.css";
import Navbar from './components/NavbarContainer';
import NavbarContainer from './components/NavbarContainer';
import Sidebar from './pages/pages/Sidebar';
import MainContent from './pages/pages/MainContent';
 // Updated import statement

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
  }, [window.innerWidth]);

  return (
    <>
       {isDesktop ? "" : <NavbarContainer isDesktop={isDesktop}/> } 
      {/* Conditionally render Navbar or Sidebar */}
    <div className={` ${isDesktop ? 'flex' : ' '}   lg:${isDesktop ? 'flex-col' : 'flex-row '}  lg:flex-row h-auto  text-white`} style={{background:"black"}}>
      {isDesktop ? <Sidebar isDesktop={isDesktop} /> : "" } {/* Conditionally render Navbar or Sidebar */}
      <MainContent isDesktop={isDesktop} /> {/* Pass isMobile as a prop to MainContent */}
    </div>
    </>
  );
}

// Remaining components remain the same

export default App;
