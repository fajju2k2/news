import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      {<Navbar />}
      <section className="hero-section">
        <p> Welcome </p>
        <h1> Home Page</h1>
      </section>
    </>
  );
};

export default Home;
