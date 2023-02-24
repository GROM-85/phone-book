import css from './Contacts.module.scss';
import PropTypes  from 'prop-types';

const Contact = ({
  name = '',
  number = '',
  id = '',
  onDelete = () => null,
}) => {
  return (
    <li className={css.contact__item} key={id}>
      <p>
        {name} : {number}
      </p>
      <button
        className={css.contact__btn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export const Contacts = ({ title, contacts, onDelete, children }) => {
  
  return (
    <>
      <div>
        <h2 className={css.contact__title}>{title}</h2>
        {children}
      </div>
      <ul className={css.contact__list}>
        {contacts.map(contact => (
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelete={onDelete}
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
    number:PropTypes.number.isRequired,
    id:PropTypes.string.isRequired,
    onDelete:PropTypes.func.isRequired,
  })),
  onDelete:PropTypes.func,
  children:PropTypes.node,
}
