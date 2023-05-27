import { Component } from 'react';
import './App.css';
import Filter from './filter/Filter';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  filterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  handleValueChange = newValue => {
    this.setState({
      contacts: newValue,
    });
  };

  onDeleteContact = contactId => {
    const newArray = this.state.contacts.filter(
      contact => contact.id !== contactId
    );

    this.handleValueChange(newArray);
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      // <div>
      //   <h1>Phonebook</h1>
      //   <div style={{ display: 'flex', flexDirection: 'column' }}>
      //     <h4>Name</h4>

      //     <input
      //       type="text"
      //       name="name"
      //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      //       required
      //       value={name}
      //       onChange={this.handleChange}
      //     />
      //     <h4>Number</h4>

      //     <input
      //       type="tel"
      //       name="number"
      //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      //       required
      //       onChange={this.handleChange}
      //       value={number}
      //     />
      //     <button type="confirm" onClick={this.addContact}>
      //       Add contact
      //     </button>
      //   </div>
      //   <p>Find contscts by name:</p>
      //   <input
      //     type="tel"
      //     autoComplete="off"
      //     name="filter"
      //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //     onChange={this.filterChange}
      //     value={filter}
      //   />
      //   <div>
      //     <h2>Contacts</h2>
      //     <ul>
      //       {this.state.filter === ''
      //         ? this.state.contacts.map(contact => (
      //             <li key={contact.id}>
      //               {contact.name}: {contact.number}
      //             </li>
      //           ))
      //         : this.state.contacts
      //             .filter(contact => {
      //               return contact.name
      //                 .toLowerCase()
      //                 .includes(this.state.filter.toLowerCase());
      //             })
      //             .map(contact => (
      //               <li key={contact.id}>
      //                 {contact.name}: {contact.number}
      //               </li>
      //             ))}
      //     </ul>
      //   </div>
      // </div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          handleValueChange={this.handleValueChange}
        ></ContactForm>

        <h2>Contacts</h2>
        <Filter filter={filter} filterChange={this.filterChange}></Filter>
        <ContactList
          filter={filter}
          contacts={contacts}
          onDeleteContact={this.onDeleteContact}
        ></ContactList>
      </div>
    );
  }
}

export default App;
