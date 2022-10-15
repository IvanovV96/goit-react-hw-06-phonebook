import PropTypes from 'prop-types';
import { FilterField } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <FilterField
      type="text"
      onChange={onChange}
      value={value}
      placeholder="Search by name..."
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
