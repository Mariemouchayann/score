import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Specialities, { ISpeciality } from './pages/Specialities';
import Disease from './pages/Diseases';
import Header from './layout/Header';
import Score from './pages/Score';

function App() {

  const [selectedSpeciality, setSelectedSpeciality] = useState<ISpeciality | null>(null);

  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Specialities selectedSpeciality={selectedSpeciality}  setSelectedSpeciality={setSelectedSpeciality} />} />
        <Route path="/specialities/:speciality" element={<Disease selectedSpeciality={selectedSpeciality}  />} />
        <Route path="/specialities/:speciality/:id" element={<Score selectedSpeciality={selectedSpeciality} />}>
          
        </Route>
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>


    </Router>
  );
}

export default App;
