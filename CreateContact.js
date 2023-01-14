import React, { useState } from 'react';


export default function CreateContact({ addcontact}) {
  const [contact, setcontact ] = useState([
    {
      name: "",phone: "",email: "",
    },
  ]);

  const handleChange = (event) => {
    setcontact({ ...contact, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addcontact(contact);
  };
  
  return (
    <div className="form">
      <form  onSubmit={handleSubmit}>
       
        <label>username : </label>
        <input
          type="text"
          value={contact.name}
          name="name"
          onChange={handleChange}
        ></input>
        <label>phone : </label>
        <input
          type="text"
          value={contact.number}
          name="phone"
          onChange={handleChange}
        ></input>
        <label>Email : </label>
        <input
          type="text"
          value={contact.email}
          name="email"
          onChange={handleChange}
        ></input>
        <button type="submit" className="create-contact"> Add </button>
        <button onClick={() => setcontact(false)} className="create-contact">Cancel</button>
      </form>
    </div>
  );
}