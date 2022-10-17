import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { ContactsList } from './Contacts/Contacts';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

const titles = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  onSubmit = values => {
    const id = uuidv4();
    const newValues = { id: id, ...values };
    this.setState(prevState => {
      return { contacts: [newValues, ...prevState.contacts] };
    });
  };

  onChange = value => {
    this.setState({ filter: value });
  };

  removeContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;

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

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  title: PropTypes.shape({
    form: PropTypes.string,
    contacts: PropTypes.string,
  }),
};
