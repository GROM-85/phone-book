import { InputStyled } from './Filter.styled';
import React from 'react';
import PropTypes  from 'prop-types';


export const Filter = ({filter ='',handleInputChange = ()=>null}) =>{
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
  filter:PropTypes.string.isRequired,
  handleInputChange:PropTypes.func.isRequired,
}
