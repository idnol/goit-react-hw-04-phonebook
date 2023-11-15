export const Filter = ({filter, onUpdateFilter}) => {
  return <div>
    <h2>Contacts</h2>
    <input type='text' name='filter' onChange={e => onUpdateFilter(e.target.value)} />
  </div>
}
