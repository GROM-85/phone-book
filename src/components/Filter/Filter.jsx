import { InputStyled } from './Filter.styled';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setFilter } from 'redux/PhoneBookSlice/slice';
// eslint-disable-next-line
import PropTypes  from 'prop-types';


export const Filter = () => {
  const filter = useSelector(state => state.phoneBook.filter);
  
  const dispatch = useDispatch();

  function handleInputChange({target}){
      const {value} = target;
      dispatch(setFilter(value));
  }
  return (
    <>
      <p>Find contact by name</p>
      <InputStyled
        name="filter"
        value={filter}
        onChange={handleInputChange}
      />
    </>
  );
}


Filter.propTypes = {
  
}
