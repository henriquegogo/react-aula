import { NOTIFICATION_ACTION } from '../actions/notification';
import { RECIPE_ACTION } from '../actions/recipe';

const initialState = { message: '' };

const notification = (state = initialState, action) => {
  switch(action.type) {
    case RECIPE_ACTION:
      const id = action.recipe.id;
      const message = id.toUpperCase() + ' é legal';
      return { ...state, message: message, color: 'purple' }
    case NOTIFICATION_ACTION:
      return { ...state, message: action.message, color: action.color }
    default:
      return state;
  }
}

export default notification;
