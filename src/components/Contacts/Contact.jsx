import PropTypes from 'prop-types';
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

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onClick: PropTypes.func,
};
