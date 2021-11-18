export const getItems = state => state.contact.items;
export const getFilter = state => state.contact.filter;

export const getFilteredContacts = state => {
  const contacts = getItems(state);
  const filter = getFilter(state);
  const normaliezedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normaliezedFilter),
  );
};
