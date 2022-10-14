import { Field, Formik } from 'formik';
import React, { Component } from 'react';
import { FormEl } from './PhonebookForm.styled';
const initialValues = {
  name: '',
  number: '',
};
export class PhonebookForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    const { contacts } = this.props;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    this.props.onSubmit(values);
    resetForm();
  };
  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
        <FormEl>
          <label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="number">
            Phone
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </FormEl>
      </Formik>
    );
  }
}
