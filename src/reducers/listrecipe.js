import { LISTRECIPE_ACTION } from '../actions/recipe';

const initialState = { receitas: [] };

const listrecipe = (state = initialState, action) => {
  switch(action.type) {
    case LISTRECIPE_ACTION:
      const { receitas } = action;
      return { receitas }
    default:
      return state;
  }
}

export default listrecipe;
