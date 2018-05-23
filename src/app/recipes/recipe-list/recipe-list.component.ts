import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecursiveAngularExpressionVisitor} from 'codelyzer/angular/templates/recursiveAngularExpressionVisitor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  receipes: Recipe[] = [  new Recipe('A Test Recipe',
    'This is simple a test',
    'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1'),
    new Recipe('A Test Recipe 2',
      'This is a second test',
      'https://haacked.com/images/haacked_com/WindowsLiveWriter/Writing-a-Recipe-in-ASP.NET-MVC-4_1246F/recipe_2.jpg')];
  constructor() { }

  ngOnInit() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
