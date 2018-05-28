import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.httpClient.put('https://recipeshoppingapp.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.httpClient.get<Recipe[]>('https://recipeshoppingapp.firebaseio.com/recipes.json')
      .subscribe(
      (recipes: Recipe[]) => {
        // const recipes = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
