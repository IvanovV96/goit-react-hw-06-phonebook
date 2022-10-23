import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { ContactsEl } from './Contacts.styled';

export const ContactsList = ({ contacts, filter, removeItem }) => {
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const onClick = e => {
    removeItem(e.target.id);
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ContactsEl>
      {filteredContacts.map(contact => {
        return <Contact contact={contact} onClick={onClick} key={contact.id} />;
      })}
    </ContactsEl>
  );
};

ContactsList.propTypes = {
  contact: PropTypes.object,
  onClick: PropTypes.func,
  key: PropTypes.string,
};
