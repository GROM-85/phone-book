import css from './Contacts.module.scss';
import PropTypes  from 'prop-types';
import { useIdContext } from 'components/contexts/IdContext';

const Contact = ({
  name = '',
  number = '',
  id = '',
}) => {
  const {setId} = useIdContext();
  return (
    <li className={css.contact__item} >
      <p>
        {name} : {number}
      </p>
      <button
        className={css.contact__btn}
        type="button"
        onClick={() => setId(id)}
      >
        Delete
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
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.exact({
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
  })),
  children:PropTypes.node,
}
