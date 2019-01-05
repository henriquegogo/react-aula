import { RECIPE_ACTION } from '../actions/recipe';

const initialState = { title: '', ingredientes: [] };

const recipe = (state = initialState, action) => {
  switch(action.type) {
    case RECIPE_ACTION:
      const { title, ingredientes } = action.recipe;
      return { title, ingredientes }
    default:
      return state;
  }
}

export default recipe;
