/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Button from '@material-ui/core/Button';
import UsersTable from 'components/HomePage/UsersTable';
import { makeSelectUsers } from './selectors';
import messages from './messages';
import { loadUsers } from './routines';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const { users, _loadUsers } = this.props;

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div style={{ padding: 24 }}>
          <h2>
            <FormattedMessage {...messages.projectHeader} />
          </h2>
          <p>
            <FormattedMessage {...messages.projectMessage} />
          </p>
          <form
            onSubmit={this.props.onSubmitForm}
            style={{ marginBottom: '1em' }}
          >
            <p>
              <FormattedMessage {...messages.trymeMessage} />
            </p>
            <Button variant="contained" color="primary" onClick={_loadUsers}>
              Fetch data
            </Button>
          </form>
        </div>

        <UsersTable {...{ users }} />
      </article>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        _loadUsers: loadUsers,
      },
      dispatch,
    ),
  };
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
