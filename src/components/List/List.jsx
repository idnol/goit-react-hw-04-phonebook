import { ListItem } from '../ListItem/ListItem';

export const List = ({contacts, onDel}) => {
  return <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <ListItem id={contact.id} name={contact.name} number={contact.number} del={onDel} />
      </li>
    ))}
  </ul>
}
