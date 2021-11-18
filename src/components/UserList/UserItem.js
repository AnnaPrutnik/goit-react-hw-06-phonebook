import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import './User.scss';

function UserItem({ user }) {
  const dispatch = useDispatch();
  const onDeleteContact = e => dispatch(deleteContact(e.target.id));

  const { id, name, number } = user;

  return (
    <li className="item">
      <span>
        {name}: {number}
      </span>
      <button id={id} type="button" onClick={onDeleteContact} className="btn">
        Delete
      </button>
    </li>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default UserItem;
