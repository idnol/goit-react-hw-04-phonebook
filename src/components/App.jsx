import { ContactForm } from './ContactForm/ContactForm';
import { useEffect, useState } from 'react';
import { List } from './List/List';
import { Filter } from './Filter/Filter';

const KEY = 'contacts';
const contactsArr = JSON.parse(window.localStorage.getItem(KEY)) ?? [];

export const App = () => {

  const [contacts, setContacts] = useState(contactsArr);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (obj) => {
    const hasContact = contacts.some(item => item.name.toLowerCase() === obj.name.toLowerCase())
    if (!hasContact) {
      setContacts(prevContacts => [...prevContacts, obj]);
      localStorage.setItem(JSON.stringify(obj))
    } else {
      alert(`${obj.name} is already in contacts`);
    }
  }

  const updateFilter = (val) => { setFilter(val) };

  const deleteContact = (val) => {
    setContacts(prevContacts => {
      return prevContacts.filter(item => item.id !== val)
    })
  }

  const searchItems = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter);
  })

  return (
    <>
      <ContactForm submit={handleSubmit} />
      <Filter filter={filter} onUpdateFilter={updateFilter} />
      {contacts.length > 0 && <List contacts={searchItems} onDel={deleteContact} />}
    </>
  );

};
