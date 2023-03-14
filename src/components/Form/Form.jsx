import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phoneBookSelectors from 'redux/PhoneBookSlice/selectors';
import * as phoneBookOperations from 'redux/PhoneBookSlice/phoneBookOperations';
import {RotatingLines} from 'react-loader-spinner'

import css from './Form.module.scss';
import { nanoid } from '@reduxjs/toolkit';

const INIT_STATE = {
  name: '',
  phone: '',
};

export const Form = () => {
  const [form, setForm] = useState(INIT_STATE);
  const contacts = useSelector(phoneBookSelectors.getContacts);
  const isLoadingForm = useSelector(phoneBookSelectors.getIsLoadingForm);
  const dispatch = useDispatch();

  const handleInputsChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (contacts.some(obj => obj.name === form.name)) {
      alert(`${form.name} is already in contacts!`);
      return;
    }
    dispatch(phoneBookOperations.addContact({...form,id:nanoid(),  createdAt:new Date().toDateString(),}));
    reset();
  };

  const reset = () => {
    setForm(INIT_STATE);
   
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__label}>
        Name
        <input
          className={css.form__input}
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputsChange}
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
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={form.phone}
          onChange={handleInputsChange}
        />
      </label>
      <button className={css.form__btn} type="submit">
        Add contact
        {isLoadingForm && <RotatingLines
         strokeColor="white"
         strokeWidth="5"
         animationDuration="0.75"
         width="20"
         visible={true}
         />}
      </button>
    </form>
  );
};


