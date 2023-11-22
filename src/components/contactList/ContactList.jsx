import { useSelector } from 'react-redux';
import styles from './contactList.module.css';
import PropTypes from 'prop-types';

export function ContactList() {
  // { contactList, filter, setContacts }
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  if (contacts === null) {
    return null;
  }
  if (filter === '') {
    return (
      <ul className={styles['contact-list']}>
        {contacts.map(item => (
          <li className={styles.contact} key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <button
              type="button"
              className={styles.button}
              id={item.id}
              // onClick={e => {
              //   setContacts(
              //     contactList.filter(item => item.id !== e.target.id)
              //   );
              // }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  let dispName;
  let dispNumber;
  let id;
  contacts.forEach(contact => {
    if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
      dispName = contact.name;
      dispNumber = contact.number;
      id = contact.id;
    }
  });
  return (
    <ul className={styles['contact-list']}>
      <li className={styles.contact} key={id}>
        {dispName}: {dispNumber}
      </li>
    </ul>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.array,
  filter: PropTypes.string,
  setContacts: PropTypes.func,
};
