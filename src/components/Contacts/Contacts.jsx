import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getContacts, removeContact } from 'redux/contacts/slice';
import { getFilterValue } from 'redux/filter/slice';
import { Contact } from './Contact';
import { ContactsEl } from './Contacts.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  const getFilteredContacts = () => {
    return contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ContactsEl>
      {filteredContacts.map(contact => {
        return (
          <Contact
            contact={contact}
            onClick={e => dispatch(removeContact(e.target.id))}
            key={contact.id}
          />
        );
      })}
    </ContactsEl>
  );
};
