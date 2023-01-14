import React from 'react';
import {Link} from 'react-router-dom';
import logo  from './logo.png';

function Home() {
    return (
        <>
         <div className="app">
         <Link className="App-link" to='/Home' rel="noopener noreferrer">
          <img src={logo} className="app-logo" alt="logo"/>
         </Link>
         </div>
       
      
      <div className="home-page-container">
        <h1>WELCOME TO MY WEB-SITE</h1>
        <h2>i am khenioua oualid ammar</h2>
        <p>
          You can browse and enjoy the web-site with the <Link to="/Contacts">Contacts</Link> or <Link to="/Blog">Blog</Link> links.
        </p>
      </div>
      </>
  );
};

export default Home;
        