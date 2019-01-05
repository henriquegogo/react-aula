import { combineReducers } from 'redux';

import notification from './notification'
import recipe from './recipe'

export default combineReducers({
  notification,
  recipe
});
