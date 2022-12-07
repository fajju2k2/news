import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sports from './components/Sports';
import InternationNews from './components/InternationNews';
import Latest from './components/Latest';
import Trending from './components/Trending';

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
          <Route path="/Latest" element={<Latest />}></Route>
          <Route path="/Trending" element={<Trending />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
