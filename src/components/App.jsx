import { ContactForm } from './ContactForm/ContactForm';
import { Component } from 'react';
import { List } from './List/List';
import { Filter } from './Filter/Filter';

const KEY = 'contacts';
const contacts = JSON.parse(window.localStorage.getItem(KEY)) ?? [];

export class App extends Component{
  state = {
    contacts: contacts ,
    filter: ''
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.contacts !== this.state.contacts) {
        window.localStorage.setItem(KEY, JSON.stringify(this.state.contacts));
      }
  }

  handleSubmit = (obj) => {
    const hasContact = this.state.contacts.some(item => item.name.toLowerCase() === obj.name.toLowerCase())
    if (!hasContact) {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, obj]
        }
      })
      localStorage.setItem(JSON.stringify(obj))
    } else {
      alert(`${obj.name} is already in contacts`);
    }
  }

  updateFilter = (val) => {
    this.setState({
      filter: val
    })
  }

  deleteContact = (val) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== val)
      }
    })
  }

  render () {
    const searchItems = this.state.contacts.filter(item => {
      return item.name.toLowerCase().includes(this.state.filter);
    })
    return (
      <>
        <ContactForm submit={this.handleSubmit} />
        <Filter filter={this.state.filter} onUpdateFilter={this.updateFilter} />
        {this.state.contacts.length > 0 && <List contacts={searchItems} onDel={this.deleteContact} />}
      </>
    );
  }

};
