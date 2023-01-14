import React, { useState } from 'react';


export default function CreateBlog({ addBlog }) {
  const [blog, setblog] = useState([
    {
      subject: "",description: "",date: "",
    },
  ]);
 
  const handleChange = (event) => {
    setblog({ ...blog, [event.target.subject]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(blog);
  };
  
  return (
    <div className="form">
      <form  onSubmit={handleSubmit}>
       
        <label>Subject : </label>
        <input
          type="text"
          value={blog.subject}
          name="name"
          onChange={handleChange}
        ></input>
        <label>Description : </label>
        <input
          type="text"
          value={blog.description}
          name="desc"
          onChange={handleChange}
        ></input>
        <label>Date : </label>
        <input
          type="date"
          value={blog.date}
          name="date"
          onChange={handleChange}
        ></input>
        <button type="submit" className="create-blog"> Add </button>
        <button onClick={() => setblog(false)} className="create-blog">Cancel</button>
      </form>
    </div>
  );
}