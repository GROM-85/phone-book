import { InputStyled } from './Filter.styled';
import React, { Component } from 'react';
import PropTypes  from 'prop-types';

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

Filter.propTypes = {
  filter:PropTypes.string.isRequired,
  handleInputChange:PropTypes.func.isRequired,
}
