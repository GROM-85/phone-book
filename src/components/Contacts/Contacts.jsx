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

export const Contacts = ({ title, contacts, onDelete =()=>null, children }) => {
  
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
    number:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
  })),
  onDelete:PropTypes.func,
  children:PropTypes.node,
}
