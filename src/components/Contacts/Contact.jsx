import { ContactEl } from './Contacts.styled';

export const Contact = ({ contact, onClick }) => {
  const { id, name, number } = contact;

  return (
    <ContactEl key={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={onClick} id={id}>
        Delete
      </button>
    </ContactEl>
  );
};
