import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// import styles from './styles.scss';

const UsersTable = props => {
  const { users } = props;

  let content = (
    <TableRow>
      <TableCell colSpan={3}>No user currently fetched.</TableCell>
    </TableRow>
  );
  if (users.length > 0) {
    content = users.map((item, key) => (
      <TableRow {...{ key }}>
        <TableCell>{item.firstName}</TableCell>
        <TableCell>{item.lastName}</TableCell>
        <TableCell>{item.email}</TableCell>
      </TableRow>
    ));
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{content}</TableBody>
    </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array,
};

export default UsersTable;
