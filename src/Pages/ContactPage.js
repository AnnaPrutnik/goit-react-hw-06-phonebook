import { useSelector } from 'react-redux';

import Form from '../components/Forms/Form';
import UserList from '../components/UserList/UsersList';
import Section from '../components/Section/Section';
import Filter from '../components/Forms/Filter';
import { getFilteredContacts } from '../redux/phonebook/phonebook-selectors';

function ContactPage() {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <Section>
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <UserList users={filteredContacts} />
      </Section>
    </div>
  );
}

export default ContactPage;
