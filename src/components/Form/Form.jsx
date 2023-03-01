import React, {useState } from 'react';
import css from './Form.module.scss';
import PropTypes  from 'prop-types';

const INIT_STATE = {
  name: '',
  number: '',
};

export const Form = ({handleFormSubmit = ()=>null,}) =>{

  const [form,setForm] = useState(INIT_STATE);
  

  const handleInputsChange  = (e) =>{
    const {name,value} = e.target;
    setForm({...form,[name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    handleFormSubmit({...form})
    reset();
  }

  const reset = () => {
    setForm(INIT_STATE);
  }
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
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={form.number}
          onChange={handleInputsChange}
        />
      </label>
      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );

}

Form.propTypes = {
  handleFormSubmit:PropTypes.func.isRequired,
}


