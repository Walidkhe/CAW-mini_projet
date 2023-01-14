
import CreateContact from './CreateContact';
import React, {useState,useEffect} from "react";
import {contactsData} from "./mycontacts";
import logo  from './logo.png';
import {Link} from 'react-router-dom';


const Contacts = () => {
    const [searchText, setSearchText] = useState('');
    const [searchCategory, setSearchCategory] = useState('name');
    const [searchResults, setSearchResults] = useState([]);

    const [display, setDisplay] = useState(true);
    const [create, setCreate] = useState(false);
    const [contacts, setContacts] = useState(contactsData);

    const createContact = contact => {
      setContacts([...contacts, contact]);
      setCreate(false);
    };
    
    const display_Contacts = () => {
          if (contacts) {
            return (
              <table>
                 <thead>
                   <tr>
                     <th>Name</th>
                     <th>Phone number</th>
                     <th>Email</th>
                   </tr>
                  </thead>
                <tbody>
                  {searchResults.map((contact, index) => (
                     <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                     </tr>
                    ))}
                  </tbody>
               </table>
            );
          }
        };
    const displayContacts = () => {
      setDisplay(!display);
    };
    
    useEffect(() => {
      let results = [];
      if (searchCategory === 'name') {
        results = contacts.filter(contact =>
          contact.name.toLowerCase().includes(searchText.toLowerCase())
        );
      } else if (searchCategory === 'phone') {
        results = contacts.filter(contact =>
          contact.phone.includes(searchText)
        );
      } else if (searchCategory === 'email') {
        results = contacts.filter(contact =>
          contact.email.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      setSearchResults(results);
    },
    
    [searchText, searchCategory, contacts]); 
    
    const handleSearch = event => {
      setSearchText(event.target.value);
    };
    const handleCategoryChange = event => {
      setSearchCategory(event.target.value);
    };
  
    return (

      <div>
        <h1 className='title'>
        <Link className="App-link" to='/' rel="noopener noreferrer">
          <img src={logo} className="app-logo" alt="logo"/>
         </Link>
         Contacts</h1>
        <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
        />

        <select value={searchCategory} onChange={handleCategoryChange}>
          <option value="name">Name</option>
          <option value="phone">Phone number</option>
          <option value="email">Email</option>
        </select>
        </div>

        {display && (display_Contacts())}
        {create ? (<CreateContact createContact={createContact} setCreate={setCreate} />):(
        <button onClick={() => setCreate(true)} className="create-contact">Create Contact</button>)}
        <button onClick={displayContacts} className="create-contact"> {display ? 'Hide' : 'Show'} Contacts </button>
      </div>


    );
  };
  
  export default Contacts;