import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [ new Recipe('A Test Recipe',
    'This is simple a test',
    'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1',
    [new Ingredient( 'Bread', 2), new Ingredient('Meat', 1)]),
    new Recipe('A Test Recipe 2',
      'This is a second test',
      'https://haacked.com/images/haacked_com/WindowsLiveWriter/Writing-a-Recipe-in-ASP.NET-MVC-4_1246F/recipe_2.jpg',
      [new Ingredient( 'Bananas', 7), new Ingredient('Onions', 4)])];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
