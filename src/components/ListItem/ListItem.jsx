export const ListItem = ({id, name, number, del }) => (
    <div>
      {name}: <span>{number}</span>
       <button type='button' onClick={() => del(id)}>Delete</button>
    </div>
)
