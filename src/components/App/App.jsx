
import React from 'react';
import { Form } from 'components/Form';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () =>{

  const contacts = useSelector(state=>state.phoneBook.contacts);
  const filter = useSelector(state=>state.phoneBook.filter);

  const filterContacts = () => {
    const formatedName = filter.trim().toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(formatedName));
  };

  return (
    <Container>
      <h2>PhoneBook</h2>
      <Form />

      {contacts.length === 0 ? (
        <h3>Nothing to show yet!</h3>
      ) : (
        <Contacts
          contacts={filterContacts()}
          title="Contacts"
        >
          <Filter />
        </Contacts>
      )}
    </Container>
  );
  
}




