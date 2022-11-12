import { useDispatch, useSelector } from 'react-redux/es/exports';
import { updateFilter } from 'redux/filter/slice';
import { FilterField } from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <FilterField
      type="text"
      onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      value={filter}
      placeholder="Search by name"
    />
  );
};
