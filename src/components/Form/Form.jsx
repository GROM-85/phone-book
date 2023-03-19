import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phoneBookSelectors from 'redux/PhoneBookSlice/selectors';
import * as phoneBookOperations from 'redux/PhoneBookSlice/phoneBookOperations';
import {RotatingLines} from 'react-loader-spinner'

import css from './Form.module.scss';
import { nanoid } from '@reduxjs/toolkit';
import { Button, FormGroup, InputAdornment, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { toast } from 'react-hot-toast';

const INIT_STATE = {
  name: '',
  number: '',
  info:'',
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
      toast(`⛔️ ${form.name} is already in contacts!`);
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
      <FormGroup sx={{ gap: 2, width: '100%' }}>
      
        <TextField
          variant='standard'
          type="text"
          name="name"
          label='Fullname'
          value={form.name}
          onChange={handleInputsChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      
       
        <TextField
          required
          variant='standard'
          label='Phone'
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={form.number}
          onChange={handleInputsChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneEnabledRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
        variant='standard'
        label='Info'
        type="text"
        name="info"
        value={form.info}
        onChange={handleInputsChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InfoRoundedIcon />
            </InputAdornment>
          ),
        }}
        />
      
      <Button className={css.form__btn} type="submit">
        Add contact
        {isLoadingForm && <RotatingLines
         strokeColor="white"
         strokeWidth="5"
         animationDuration="0.75"
         width="20"
         visible={true}
         />}
      </Button>
      </FormGroup>
    </form>
  );
};


