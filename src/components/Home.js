import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      {<Navbar />}
      <section className="hero-section">
        <p> Today </p>
        <h1> News </h1>
      </section>
    </>
  );
};

export default Home;
