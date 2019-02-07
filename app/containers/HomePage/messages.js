/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.HomePage';

export default defineMessages({
  projectHeader: {
    id: `${scope}.project.header`,
    defaultMessage: 'Welcome!',
  },
  projectMessage: {
    id: `${scope}.project.message`,
    defaultMessage:
      'This project consist in a fullstack app. The frontent is made with React.js, the data it consumes are provided by a backend part made with Node.js and MySQL. Please note everything is WIP!',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Click the following button to fetch users from the backend!',
  },
});
