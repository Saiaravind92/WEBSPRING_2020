import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  @Input() recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router) {

  }


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }

  onNewRecipe(){
    this.router.navigate(['/recipes', 'new']);
  }
  

}
