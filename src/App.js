import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sports from './components/Sports';
import InternationNews from './components/InternationNews';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/InternationalNews"
            element={<InternationNews />}
          ></Route>
          <Route path="/Sports" element={<Sports />}></Route>
        </Routes>
        <Route path="/" element={<Home />}></Route>
      </BrowserRouter>
    </>
  );
};

export default App;
