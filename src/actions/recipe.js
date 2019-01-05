export const RECIPE_ACTION = 'RECIPE_ACTION';

export function showRecipe(recipe) {
  return { type: RECIPE_ACTION, recipe };
}
