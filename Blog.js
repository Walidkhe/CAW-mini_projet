import React, {useState} from "react";
import CreateBlog from "./CreateBlog";
//import { blogsData } from "./mypost";
import logo  from './logo.png';
import {Link} from 'react-router-dom';


const Like = () => { 
  const [count, setCount] = useState(0)
  const handleClick1 = () => { setCount(count + 1)}
  return (
    <div >
      <div >
        {count}
      </div>
      <div>
        <button onClick={handleClick1} className="like">Like</button></div>
    </div>
  )
  }
const Blogs = () => {
  const [create, setCreate] = useState(false);
  const [blogs, setBlogs] = useState([ {   
    subject:"2022 football world cup",
    description:"it held in qatar and was the best one",
    date:"21/12/2022"
},
{   
    subject:"youtube",
    description:"one of a biggest platfrom to make videos",
    date:"19/12/2022"
},]);

  const [display, setDisplay] = useState(true);

  const createBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
    setCreate(false);
  };
  
  const displayBlogs = () => {
    if (blogs) {
      return (
        <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Description</th>
            <th>Date</th>
            <th>Like</th>
            
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index}>
              <td>{blog.subject}</td>
              <td>{blog.description}</td>
              <td>{blog.date}</td>
              <td><Like /></td>
            </tr>
          ))}
        </tbody>
      </table>  
      
      );
    }
  };
  const display_Blogs = () => {
    setDisplay(!display);
  };
  
  return (
    <div>
      <h1 className='title'>
        <Link className="App-link" to='/' rel="noopener noreferrer">
          <img src={logo} className="app-logo" alt="logo"/>
         </Link>
         Blogs</h1>
      {display && (displayBlogs())}
      {create ? ( <CreateBlog createBlog={createBlog} setCreate={setCreate} />) : (
      <button onClick={() => setCreate(true)} className="create-blog">Create Blog</button>)} 
      <button onClick={display_Blogs} className="create-blog"> {display ? 'Hide' : 'Show'} Blogs </button>
        </div>
  );
};

export default Blogs;
  