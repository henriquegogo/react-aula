export const LISTRECIPE_ACTION = 'LISTRECIPE_ACTION';
export const RECIPE_ACTION = 'RECIPE_ACTION';

export function listRecipe(dispatch) {
  fetch('http://localhost:8000/receitas')
  .then(response => response.json())
  .then(response => {
    dispatch({ type: LISTRECIPE_ACTION, receitas: response });
  });
}

export function showRecipe(recipe) {
  return { type: RECIPE_ACTION, recipe };
}
