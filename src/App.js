import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Missions from './Pages/Missions';
import Rockets from './Pages/Rockets';
import Navbar from './component/Navbar';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index path='/' element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
