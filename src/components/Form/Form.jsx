import classNames from 'classnames';
import React, { Component } from 'react';
import css from './Form.module.scss';
const INIT_STATE = {
  name: '',
  number: '',
};

export class Form extends Component {
  static defaultProps = {
    handleFormSubmit: () => null,
  };

  state = { ...INIT_STATE };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements)
    this.props.handleFormSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INIT_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.form__label}>
          Name
          <input
          className={css.form__input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
          />
        </label>
       
        <label className={css.form__label}>
        Number
          <input
          className={css.form__input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleInputChange}
          />
        </label>
        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
