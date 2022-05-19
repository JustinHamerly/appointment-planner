import React, { useState, useEffect } from "react";

import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = ({addContact, contacts}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  
  useEffect(() => {
    for (let contact of contacts){
      if (contact.name === name){
        setIsDuplicate(true)
      }
    }
  }, [contacts, name])

  const resetState = () => {
    setName('');
    setPhone('');
    setEmail('');
    setIsDuplicate(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isDuplicate){
      addContact(name, phone, email);
    }
    resetState();
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {
          contacts.length &&
          <TileList tileArray={contacts} />
        }
      </section>
    </div>
  );
};
