import { Component } from 'react';
import { Contact } from './Contact';
import { ContactsEl } from './Contacts.styled';

export class ContactsList extends Component {
  getFilteredContacts = () => {
    const { contacts, filter } = this.props;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
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
