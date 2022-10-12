import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export class App extends Component {
  state = {
    contacts: [],
  };
  onSubmit = values => {
    this.setState(prevState => {
      return { contacts: [values, ...prevState.contacts] };
    });
  };
  render() {
    return (
      <>
        <PhonebookForm onSubmit={this.onSubmit} />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}
