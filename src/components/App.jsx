import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getData = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...data }],
    }));

    const contact = this.state.contacts.find(
      contacts => contacts.name.toLowerCase() === data.name.toLowerCase()
    );
    console.log(contact);
    if (contact) {
      return alert(`${data.name} is already in contacts`);
    }
  };

  filter = filter => {
    console.log('filter', filter);
    this.setState({ filter: filter });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const visibleContacts = this.getFilterContacts();

    return (
      <div>
        <Phonebook onGetData={this.getData} />

        <Contacts
          contacts={visibleContacts}
          onFilter={this.filter}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}
