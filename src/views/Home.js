import React from 'react';
import boot from '../plugins/index'
import Hero from '../pages/HomePage/components/Hero';
const Home = (props) => {
  console.log(props)

  return(

  <div className="content">
        <boot.Container fluid>
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
  </div>
  )
}




  export default Home;