import { Container } from 'components/App/App.styled';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import phoneBookSelectors from 'redux/PhoneBookSlice/selectors';
import * as phoneBookOperations from 'redux/PhoneBookSlice/phoneBookOperations';
import { Contacts } from 'components/Contacts';
import { Typography } from '@mui/material';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(phoneBookSelectors.getContacts);
  const filter = useSelector(phoneBookSelectors.getFilter);
  const isLoading = useSelector(phoneBookSelectors.getIsLoading);

  const filterContacts = () => {
    const formatedName = filter.trim().toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(formatedName)
    );
  };

  useEffect(() => {
    dispatch(phoneBookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginTop:'20px',
          marginBottom:'auto'
        }}
      >
        <Typography component="h3" variant="h5" style={{marginBottom:'20px'}}>PhoneBook</Typography>
        <Form />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop:'20px',
          marginBottom:'auto'
        }}
      >
        {contacts.length === 0 && !isLoading ? (
          <Typography component='h3' variant='h5'>Kindly add you first contact!</Typography>
        ) : (
          <Contacts contacts={filterContacts()} title="Contacts">
            <Filter />
          </Contacts>
        )}
      </div>
    </Container>
  );
};

export default ContactsPage;
