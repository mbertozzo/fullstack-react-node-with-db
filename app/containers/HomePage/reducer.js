import { fromJS } from 'immutable';

import { loadUsers } from './routines';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case loadUsers.TRIGGER:
      return state.set('loading', true).set('error', false);
    case loadUsers.SUCCESS:
      return state.set('loading', false).set('data', action.payload);
    case loadUsers.FAILURE:
      return state.set('error', action.err).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
