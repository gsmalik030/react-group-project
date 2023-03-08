import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Missions from './Pages/Missions';
import Rockets from './Pages/Rockets';
import Profile from './Pages/Profile';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
