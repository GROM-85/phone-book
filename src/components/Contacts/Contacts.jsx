import css from './Contacts.module.scss';
import PropTypes from 'prop-types';
import * as phoneBookOperations from 'redux/PhoneBookSlice/phoneBookOperations';
import { useDispatch, useSelector } from 'react-redux';
import phoneBookSelectors from 'redux/PhoneBookSlice/selectors';
import { ThreeDots } from 'react-loader-spinner';
import { setActiveId } from 'redux/PhoneBookSlice/slice';

const Contact = ({ name = '', phone = '', id = '' }) => {
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(phoneBookSelectors.getIsLoadingDelete);
  const activeId = useSelector(phoneBookSelectors.getActiveId)

  return (
    <li className={css.contact__item}>
      <p>
        {name} : {phone}
      </p>
      <button
        className={css.contact__btn}
        type="button"
        onClick={() => {
          dispatch(phoneBookOperations.deleteContact(id));
          dispatch(setActiveId(id));
        }}
      >
        {(isLoadingDelete && activeId.includes(id)) ? (
          <ThreeDots
            height="10"
            width="20"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          'Delete'
        )}
      </button>
    </li>
  );
};

export const Contacts = ({ title, contacts, children }) => {
  return (
    <>
      <div>
        <h2 className={css.contact__title}>{title}</h2>
        {children}
      </div>
      <ul className={css.contact__list}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            phone={contact.phone}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  children: PropTypes.node,
};
