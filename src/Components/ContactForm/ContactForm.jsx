import { useState } from 'react';
import { MdPerson } from "react-icons/md";
import { MdStayPrimaryPortrait } from "react-icons/md";
import {Forma, Input, Label, Button} from './ContactForm.styled'



export default function ContactForm({onSubmit}) {
 const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(name, number);
    resetName();
    resetNumber();
  };

  const resetName = () => {
    setName('');
  };

  const resetNumber = () => {
    setNumber('');
  };


    return (
      <Forma onSubmit={handleSubmit}>
        <Label >
          <MdPerson></MdPerson>
          Name
          <Input
            
            type="text"
            name="name"
            value={name}
            placeholder="Oleksandr Vasylchuk"
            onChange={handleChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            maxLength="33"
          />
        </Label>

        <Label >
          <MdStayPrimaryPortrait></MdStayPrimaryPortrait>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            placeholder="000-00-00"
            onChange={handleChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            maxLength="20"
          />
        </Label>
        <Button  type="submit">
          Add contact
        </Button>
      </Forma>
    );
  
}
