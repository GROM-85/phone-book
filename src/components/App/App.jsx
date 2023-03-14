
import React, { useEffect } from 'react';
import { Form } from 'components/Form';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import phoneBookSelectors from 'redux/PhoneBookSlice/selectors';
import * as phoneBookOperations from 'redux/PhoneBookSlice/phoneBookOperations'
import { RotatingLines } from 'react-loader-spinner';


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(phoneBookSelectors.getContacts);
  const filter = useSelector(phoneBookSelectors.getFilter);
  const isLoading = useSelector(phoneBookSelectors.getIsLoading);

  const filterContacts = () => {
    const formatedName = filter.trim().toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(formatedName));
  };

  useEffect(()=>{
    dispatch(phoneBookOperations.fetchContacts());
    console.log("useEffect")
  },[dispatch]);
 

  return (
    <Container>
      <h2>PhoneBook</h2>
      <Form />

      {contacts.length === 0  && !isLoading && 
        (<h3>Nothing to show yet!</h3>)}
        {isLoading ? (<RotatingLines
         strokeColor="grey"
         strokeWidth="5"
         animationDuration="0.75"
         width="40"
         visible={true}
         />): (<Contacts
          contacts={filterContacts()}
          title="Contacts"
        >
          <Filter />
        </Contacts>)}
    </Container>
  );
  
}




