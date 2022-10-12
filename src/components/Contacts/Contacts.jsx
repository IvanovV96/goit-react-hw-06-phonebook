export const Contacts = ({ contacts }) => {
  console.log(contacts);
  let id = 1;
  return (
    <ul>
      {contacts.map(({ name, phone }) => {
        return (
          <li key={(id += 1)}>
            {name}: {phone}
          </li>
        );
      })}
    </ul>
  );
};
