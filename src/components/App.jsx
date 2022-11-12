import { ContactsList } from './Contacts/Contacts';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

const titles = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export const App = () => {
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Section title={titles.form}>
        <PhonebookForm />
      </Section>

      <Section title={titles.contacts}>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};
