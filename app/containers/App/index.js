/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import HomePage from 'containers/HomePage';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Fragment>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            App
          </Typography>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/features" component={FeaturePage} /> */}
        {/* <Route path="" component={NotFoundPage} /> */}
      </Switch>
      <GlobalStyle />
    </Fragment>
  );
}
