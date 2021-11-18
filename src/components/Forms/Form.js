import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-actions';
import { getItems } from '../../redux/phonebook/phonebook-selectors';
import './Forms.scss';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getItems);
  const dispatch = useDispatch();
  const onAddContacts = (name, number) => dispatch(addContact(name, number));

  const handlerChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const checkDoubleContact = () => {
    const normalizedContactName = name.toLowerCase();
    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedContactName,
    );
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const double = checkDoubleContact();
    if (double) {
      alert(`Contact with name ${name} already exist`);
      return;
    }
    onAddContacts(name, number);
    reset();
  };

  return (
    <form onSubmit={handlerSubmit} className="form">
      <div className="wrapper">
        <label htmlFor="name" className="label">
          Name
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            className="input"
            onChange={handlerChange}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor="number" className="label">
          Number
          <input
            id="number"
            type="tel"
            name="number"
            value={number}
            className="input"
            autoComplete="off"
            onChange={handlerChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
      </div>
      <button type="submit" className="btn">
        Add contact
      </button>
    </form>
  );
}

export default Form;
