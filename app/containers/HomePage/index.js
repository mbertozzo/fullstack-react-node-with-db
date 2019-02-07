/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectUsers } from './selectors';
import messages from './messages';
import { loadUsers } from './routines';
import reducer from './reducer';
import saga from './saga';

import Button from 'components/Button';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {

  render() {
    const { users, onSubmitForm } = this.props;
    console.log('USERS FROM HOME', users);

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
            <h2><FormattedMessage {...messages.projectHeader} /></h2>
            <p><FormattedMessage {...messages.projectMessage} /></p>
            <form onSubmit={this.props.onSubmitForm} style={{ marginBottom: '1em' }}>
              <p><FormattedMessage {...messages.trymeMessage} /></p>
              <Button 
                onClick={onSubmitForm}
              >
                Fetch data
              </Button>
            </form>
            {users && <p>Users fetched! Open the Console to check the data.</p>}
        </div>
      </article> 
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadUsers());
    },
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
