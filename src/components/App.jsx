import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { v4 as uuidv4 } from 'uuid';
export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onSubmit = values => {
    const id = uuidv4();
    const newValues = { id: id, ...values };

    this.setState(prevState => {
      prevState.contacts.map(contact => {
        if (contact.name.toLowerCase() === values.name.toLowerCase()) {
          return alert(`${values.name} is already in contacts`);
        }
      });
      return { contacts: [newValues, ...prevState.contacts] };
    });
  };
  onChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  removeContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const titles = {
      form: 'Phonebook',
      contacts: 'Contacts',
    };
    return (
      <>
        <Section title={titles.form}>
          <PhonebookForm onSubmit={this.onSubmit} />
        </Section>

        <Section title={titles.contacts}>
          <Filter contacts={contacts} onChange={this.onChange} value={filter} />
          <Contacts
            contacts={contacts}
            filter={filter}
            removeItem={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
