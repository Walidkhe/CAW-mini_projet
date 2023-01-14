import React from 'react';
import './App.css';

import Home from './Home';
import Contacts from './Contacts';
import Blog from './Blog';

//import CreateContact from './CreateContact';
//import CreateBlog from './CreateBlog';

import { BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
     <BrowserRouter>
     <div className='App' style={{backgroundImage:"url(./bulle.jpg)"}}> 
      <Routes>
      
          <Route path="/" element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/blog" element={<Blog/>}/>
       
          </Routes>
      </div>
      </BrowserRouter>
      

  );
}

export default App;
