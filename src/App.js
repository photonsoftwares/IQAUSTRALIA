
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Ui from './pages/PhotonSoftware';
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Ui />} />
      </Routes>
    </>
  );
}

export default App;
