/**
 * Asynchronously loads the component for HomePage
 */
import loadable from 'loadable-components';

// import CircularProgress from '@material-ui/core/CircularProgress';

export default loadable(() => import('./index'), {
  // LoadingComponent: CircularProgress,
});
