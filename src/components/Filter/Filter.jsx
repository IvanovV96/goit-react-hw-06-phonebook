import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getFilterValue, updateFilter } from 'redux/filter/slice';
import { FilterField } from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  return (
    <FilterField
      type="text"
      onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      value={filter}
      placeholder="Search by name"
    />
  );
};
