export const LISTRECIPE_ACTION = 'LISTRECIPE_ACTION';
export const RECIPE_ACTION = 'RECIPE_ACTION';

export function listRecipe() {
  return function(dispatch, getState) {
    fetch('http://localhost:8000/receitas')
    .then(response => response.json())
    .then(response => {
      dispatch({ type: LISTRECIPE_ACTION, receitas: response });
    });
  }
}

export function showRecipe(recipe) {
  return { type: RECIPE_ACTION, recipe };
}
