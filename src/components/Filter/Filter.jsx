import { InputStyled } from './Filter.styled';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setFilter} from 'redux/PhoneBookSlice/slice';
import phoneBookSelectors from 'redux/PhoneBookSlice/selectors';



export const Filter = () => {
  const filter = useSelector(phoneBookSelectors.getFilter);
  
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



