import shortid from 'shortid';
import React, {useState,useEffect } from 'react';
import { Form } from 'components/Form';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';
import { useIdContext } from 'components/contexts/IdContext';

const CONTACT = "contact";

export const App = () =>{

  const [contacts,setContacts] = useState(()=>(JSON.parse(localStorage.getItem(CONTACT)) ?? []));
  const [filter,setFilter] = useState('');
  const {id} = useIdContext();

  useEffect(()=>{
   localStorage.setItem(CONTACT,JSON.stringify(contacts));
  },[contacts]);

  useEffect(()=>{
    setContacts(contacts.filter(contact=>contact.id !== id))
    // eslint-disable-next-line
  },[id])

  const handleFormSubmit = (contact) =>{
    if(contacts.some(obj => obj.name === contact.name)){
      alert(`${contact.name} is already in contacts!`)
      return;
    } 
    Object.assign(contact,{id:shortid.generate()});
    setContacts(state => [...state,contact])
  }

  const onFilterChange = (e) =>{
    setFilter(e.target.value);
  }

  const filterContacts = () => {
    const formatedName = filter.trim().toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(formatedName));
  };

  return (
    <Container>
      <h2>PhoneBook</h2>
      <Form handleFormSubmit={handleFormSubmit} />

      {contacts.length === 0 ? (
        <h3>Nothing to show yet!</h3>
      ) : (
        <Contacts
          contacts={filterContacts()}
          title="Contacts"
          // onDelete={deleteContact}
        >
          <Filter filter={filter} handleInputChange={onFilterChange}/>
        </Contacts>
      )}
    </Container>
  );
  
}




