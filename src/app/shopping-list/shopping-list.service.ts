import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Oranges', 10)];

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    console.log(ingredients);
    this.ingredients.push(... ingredients);
  }
}
