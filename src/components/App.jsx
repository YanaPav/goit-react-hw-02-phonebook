import React, { Component } from "react";
import { ContactForm } from './ContactForm/ContactForm'
import { ContactList } from './ContactList/ContactList'
import {Filter} from './Filter/Filter'

export class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  }

  addContact = (contactObject) => {

    return this.setState(prevState => ({
      contacts: [...prevState.contacts, contactObject],
      name: ''
    }))
  }

  handlerFilterChange = (e) => {
    this.setState({
      filter: e.currentTarget.value
    }) 
  }
 

  render() {
    const { contacts, filter } = this.state
    const filtredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
    
    return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={this.addContact} />
  
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.handlerFilterChange} />
      <ContactList contacts={filtredContacts} />      
    </div>
  );
  }
};
