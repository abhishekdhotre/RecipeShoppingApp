import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe) , 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
