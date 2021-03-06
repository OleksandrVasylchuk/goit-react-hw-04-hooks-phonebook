import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import Section from "./Components/Section/Section";

function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}


export default function App() {
 
 
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const item = {
      id: uuid(),
      name,
      number,
    };

    const includeName = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const includeNumber = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (name === '' || number === '') {
      alert('Please enter all fields!');
      return;
    }

    if (includeName.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    } else if (includeNumber.includes(number)) {
      alert(`${number} is already in contacts`);
    } else {
      setContacts(contacts => [item, ...contacts]);
    }
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  
    return (
      <>
       <Section>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
      </>
    );
  
  
}





// class App extends Component {
 
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     name: '',
//     number: '',
//   };

//    componentDidMount() {
//     const contact = localStorage.getItem('contacts');
//     const parsedContact = JSON.parse(contact);

//     if (parsedContact) {
//       this.setState({ contacts: parsedContact });
//     }
//   }

//   componentDidUpdate( prevState) {
//     const contact = JSON.stringify(this.state.contacts);
//     if (contact !== prevState.contacts) {
//       localStorage.setItem('contacts', contact);
//     }
//   }
  
//   addContact = (name, number) => {
//     const item = {
//        id : uuid(),
//       name,
//       number,
//     }
//      const includeName = this.state.contacts.reduce(
//       (acc, contact) => [...acc, contact.name],
//       [],
//       );
//      const includeNumber = this.state.contacts.reduce(
//       (acc, contact) => [...acc, contact.number],
//       [],
//       );

 
  
//       if(name === '' || number === '') {
//       alert('Please enter all fields!');
//       return;
//       }

//         if (includeName.includes(name)) {
//                 alert(`${name} is already in contacts`);
//               return;
//         } else if (includeNumber.includes(number)){
//           alert(`${number} is already in contacts`);
//               return;
//         } else {
//           this.setState(({ contacts }) => ({
//                 contacts: [item, ...contacts],
//           }));
//         }
//   }
  
  
//  changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };


//   render() {
   
//     const { contacts, filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <>
//        <Section>
//         <h1>Phonebook</h1>
//         <ContactForm contacts={contacts} onSubmit={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </Section>
//       </>
//     );
//   }
  
// }

// export default App;
