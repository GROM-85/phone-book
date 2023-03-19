import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/PhoneBookSlice/slice';
import phoneBookSelectors from 'redux/PhoneBookSlice/selectors';
import { TextField} from '@mui/material';

export const Filter = () => {
  const filter = useSelector(phoneBookSelectors.getFilter);

  const dispatch = useDispatch();

  function handleInputChange({ target }) {
    const { value } = target;
    dispatch(setFilter(value));
  }
  return (
    <>
      <TextField
        variant="outlined"
        label="Filter by name"
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
      />
    </>
  );
};
