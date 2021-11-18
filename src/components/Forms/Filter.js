import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import './Forms.scss';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const omChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <label htmlFor="filter" className="label filterLabel">
      Find contacts by name
      <input
        id="filter"
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={omChangeFilter}
        className="input filterInput"
      />
    </label>
  );
}

export default Filter;
