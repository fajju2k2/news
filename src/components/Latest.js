import React from 'react';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Latest = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/latest');
      setNews(result);
    };
    fetchData();
  }, []);
  return (
    <>
      {<Navbar />}

      <section className="hero-section">
        <p> Latest </p>
        <h1> News </h1>
      </section>
    </>
  );
};

export default Latest;
