function ContactList({ filter, contacts, onDeleteContact }) {
  //   console.log(contacts);

  return (
    <ul>
      {contacts[0] === undefined ? (
        <span
          style={{ fontStyle: 'Italic', textAlign: 'center', display: 'block' }}
        >
          Your phonebook is emply
        </span>
      ) : (
        ''
      )}

      {filter === ''
        ? contacts.map(contact => (
            <li key={contact.id}>
              <span>
                {contact.name}: {contact.number}
              </span>
              <button
                onClick={() => {
                  onDeleteContact(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          ))
        : contacts
            .filter(contact => {
              return contact.name.toLowerCase().includes(filter.toLowerCase());
            })
            .map(contact => (
              <li key={contact.id}>
                <span>
                  {contact.name}: {contact.number}
                </span>
                <button
                  onClick={() => {
                    onDeleteContact(contact.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
    </ul>
  );
}

export default ContactList;
