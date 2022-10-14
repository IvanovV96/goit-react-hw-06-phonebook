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
