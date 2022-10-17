import PropTypes from 'prop-types';
import { FilterField } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  const handleChange = e => onChange(e.currentTarget.value);
  return <FilterField type="text" onChange={handleChange} value={value} />;
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
