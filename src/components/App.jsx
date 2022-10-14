import { Component } from 'react';
import { ContactsList } from './Contacts/Contacts';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { v4 as uuidv4 } from 'uuid';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = values => {
    const id = uuidv4();
    const newValues = { id: id, ...values };
    this.setState(prevState => {
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
          <PhonebookForm
            onSubmit={this.onSubmit}
            contacts={this.state.contacts}
          />
        </Section>

        <Section title={titles.contacts}>
          <Filter contacts={contacts} onChange={this.onChange} value={filter} />
          <ContactsList
            contacts={contacts}
            filter={filter}
            removeItem={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
