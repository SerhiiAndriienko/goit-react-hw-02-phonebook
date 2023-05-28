import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    if (e.target.type === 'text') {
      this.setState({
        name: e.target.value,
      });
    } else {
      this.setState({
        number: e.target.value,
      });
    }
  };
  addContact = e => {
    e.preventDefault();
    const newContactName = this.state.name;
    const test = this.props.contacts.some(contact => {
      return contact.name === newContactName;
    });
    if (test) {
      alert(`${newContactName} is already in contacts.`);
      return;
    }
    const newArray = this.props.contacts;
    newArray.push({
      name: `${this.state.name}`,
      number: `${this.state.number}`,
      id: nanoid(),
    });
    this.setState({
      name: '',
      number: '',
    });
    console.log(this.state);
    this.props.handleValueChange(newArray);
  };
  render() {
    return (
      <div>
        <h4>Name</h4>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <h4>Number</h4>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <button type="confirm" onClick={this.addContact}>
          Add contact
        </button>
      </div>
    );
  }
}

export default ContactForm;
