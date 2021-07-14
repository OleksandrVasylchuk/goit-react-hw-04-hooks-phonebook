import React, { Component } from 'react';
import { MdPerson } from "react-icons/md";
import { MdStayPrimaryPortrait } from "react-icons/md";
import {Forma, Input, Label, Button} from './ContactForm.styled'



export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Forma onSubmit={this.handleSubmit}>
        <Label >
          <MdPerson></MdPerson>
          Name
          <Input
            
            type="text"
            name="name"
            value={name}
            placeholder="Oleksandr Vasylchuk"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
}
