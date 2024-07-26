import {
  Container,
  List,
  ListItem,
  ItemBtn,
  ItemName,
} from './Contacts.styled';

export const Contacts = ({ contacts, onFilter, onRemoveContact }) => {
  return (
    <Container>
      <h1>Contacts</h1>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        onChange={e => {
          onFilter(e.target.value);
        }}
      />
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            <ItemName>{contact.name}</ItemName>
            <ItemName>{contact.number}</ItemName>
            <ItemBtn onClick={() => onRemoveContact(contact.id)} type="button">
              Delete
            </ItemBtn>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
