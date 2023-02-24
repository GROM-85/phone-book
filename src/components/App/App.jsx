import shortid from 'shortid';
import React, { Component } from 'react';
import { Form } from 'components/Form';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  filteredContacts = this.state.contacts;

  handleFormSubmit = contact => {
    if(this.nameVerification(contact.name)) return ;

    Object.assign(contact, { id: shortid.generate() });
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setFilter = (e) =>{
    this.setState({filter: e.target.value});
  }

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const formatedName = filter.trim().toLowerCase();
    console.log(formatedName)
    return contacts.filter(contact => contact.name.toLowerCase().includes(formatedName));
  };

  nameVerification = (name) =>{
    const {contacts} = this.state;
    for(let contact of contacts){
      if(contact.name === name){
        alert(`${name} is already in contacts!`)
        return true;
      } 
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const contactToShow = this.filterContacts();
    console.log("to show",contactToShow)
    return (
      <Container>
        <h2>PhoneBook</h2>
        <Form handleFormSubmit={this.handleFormSubmit} />

        {contacts.length === 0 ? (
          <h3>Nothing to show yet!</h3>
        ) : (
          <Contacts
            contacts={contactToShow}
            title="Contacts"
            onDelete={this.deleteContact}
          >
            <Filter filter={filter} handleInputChange={this.setFilter}/>
          </Contacts>
        )}
      </Container>
    );
  }
}
