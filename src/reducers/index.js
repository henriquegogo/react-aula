import { combineReducers } from 'redux';

import notification from './notification'
import recipe from './recipe'
import listrecipe from './listrecipe'

export default combineReducers({
  notification,
  recipe,
  listrecipe,
});
