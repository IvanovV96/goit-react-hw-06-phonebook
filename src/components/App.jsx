import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { ContactsList } from './Contacts/Contacts';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { parseDataFromLS } from 'services/Toastify/parseDataFromLS';

const titles = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export const App = () => {
  const [contacts, setContacts] = useState(parseDataFromLS('contacts'));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = values => {
    const id = uuidv4();
    const newValues = { id: id, ...values };
    setContacts([newValues, ...contacts]);
  };

  const onChange = value => setFilter(value);

  const removeContact = id => {
    const contact = contacts.filter(contact => contact.id !== id);
    setContacts(contact);
  };

  return (
    <>
      <Section title={titles.form}>
        <PhonebookForm onSubmit={onSubmit} contacts={contacts} />
      </Section>

      <Section title={titles.contacts}>
        <Filter value={filter} onChange={onChange} />
        <ContactsList
          contacts={contacts}
          filter={filter}
          removeItem={removeContact}
        />
      </Section>
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  title: PropTypes.shape({
    form: PropTypes.string,
    contacts: PropTypes.string,
  }),
};
