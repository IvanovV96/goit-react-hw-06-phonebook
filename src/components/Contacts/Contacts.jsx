import PropTypes from 'prop-types';
import { Component } from 'react';
import { Contact } from './Contact';
import { ContactsEl } from './Contacts.styled';

export class ContactsList extends Component {
  getFilteredContacts = () => {
    return this.props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
    );
  };

  onClick = e => {
    this.props.removeItem(e.target.id);
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <ContactsEl>
        {filteredContacts.map(contact => {
          return (
            <Contact
              contact={contact}
              onClick={this.onClick}
              key={contact.id}
            />
          );
        })}
      </ContactsEl>
    );
  }
}

ContactsList.propTypes = {
  contact: PropTypes.object,
  onClick: PropTypes.func,
  key: PropTypes.string,
};
