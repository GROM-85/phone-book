import { InputStyled } from './Filter.styled';
import React, { Component } from 'react';

export class Filter extends Component {

  render() {
    const {filter,handleInputChange} = this.props;

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
}
