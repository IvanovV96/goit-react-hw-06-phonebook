import { Component } from 'react';

export class Contacts extends Component {
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
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" onClick={this.onClick} id={id}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
