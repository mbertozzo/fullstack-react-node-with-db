import { createSelector } from 'reselect';

const selectHome = state => state.get('home');

const selectRouter = state => state.get('router');

const makeSelectUsers = () =>
  createSelector(selectHome, state => state.get('data').toJS());

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export { selectHome, makeSelectUsers, makeSelectLocation };
