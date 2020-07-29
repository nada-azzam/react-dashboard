import React from 'react';
import boot from '../../plugins/index'
import Hero from './components/Hero';
const Home = () => (
    <boot.Container className="p-3">
      <boot.Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <Hero>
          We now have Toasts<i className="fas fa-cog"></i>
          <span role="img" aria-label="tada">
            🎉
          </span>
        </Hero>
      </boot.Jumbotron>
    </boot.Container>
  );

  export default Home;