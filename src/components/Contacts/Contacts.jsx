import css from './Contacts.module.scss';
import PropTypes from 'prop-types';
import * as phoneBookOperations from 'redux/PhoneBookSlice/phoneBookOperations';
import { useDispatch, useSelector } from 'react-redux';
import phoneBookSelectors from 'redux/PhoneBookSlice/selectors';
import { ThreeDots } from 'react-loader-spinner';
import { setActiveId } from 'redux/PhoneBookSlice/slice';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, Button } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  offscreen: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Contact = ({ name = '', number = '', id = '' }) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState();

  const handleChange = id => (event, isExpanded) => {
    setExpanded(isExpanded ? id : false);
  };
  const isLoadingDelete = useSelector(phoneBookSelectors.getIsLoadingDelete);
  const activeId = useSelector(phoneBookSelectors.getActiveId);

  return (
    <motion.li
      className={css.contact__item}
      variants={variants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={id}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{name}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{number}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
          <Button
            className={css.contact__btn}
            variant="contained"
            onClick={() => {
              dispatch(phoneBookOperations.deleteContact(id));
              dispatch(setActiveId(id));
            }}
          >
            {isLoadingDelete && activeId.includes(id) ? (
              <ThreeDots
                height="20"
                width="20"
                radius="10"
                color="white"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              <DeleteForeverRoundedIcon />
            )}
          </Button>
        </AccordionDetails>
      </Accordion>
    </motion.li>
  );
};

const variantsUl = {
  onscreen: {
    opacity:1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
  offscreen: {
    opacity:0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Contacts = ({ title, contacts, children }) => {
  return (
    <>
      <div>
        <Typography className={css.contact__title} component="h3" variant="h5">
          {title}
        </Typography>
        {children}
      </div>
      <motion.ul 
        className={css.contact__list} 
        variants={variantsUl}
        initial="offscreen"
        animate="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </motion.ul>
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
      createdAt: PropTypes.string,
    })
  ),
  children: PropTypes.node,
};
