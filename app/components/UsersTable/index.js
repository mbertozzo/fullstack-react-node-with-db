import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const UsersTable = props => {
  const { users } = props;

  let content = <p>No user currently fetched.</p>;
  if (users) {
    content = users.map((item, key) => (
      <div className={styles.tableRow} {...{ key }}>
        <p className={styles.tableRowHead}>User #{key}</p>
        <p>First name: {item.firstName}</p>
        <p>Last name: {item.lastName}</p>
        <p>Email: {item.email}</p>
      </div>
    ));
  }

  return <div>{content}</div>;
};

UsersTable.propTypes = {
  users: PropTypes.object,
};

export default UsersTable;
