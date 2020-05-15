import { Recipe } from './../recipe.model';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from './../../recipe/recipe.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  recipeForm: FormGroup;

  private recipeIndex: number;
  private subscription: Subscription;
  private isNew = true;
  private recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        //edit mode
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }
        // new mode
        else {
          this.isNew = true;
          this.recipe = null;
        }
      }
    );

    let recipeName = null;
    let recipeImagePath = null;
    let recipeDescription = null;
    let recipeIngredients = new FormArray([]);

    if (!this.isNew) {
      if (this.recipe.hasOwnProperty('ingredients')) {
        for (let ingredient of this.recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, Validators.required)
            }));
        }
      }

      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.imagePath;
      recipeDescription = this.recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if(this.isNew){
       this.recipeService.addRecipe(newRecipe);
    }else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
   
    this.onNavigateBack();
  }

  onCancel() {
    this.onNavigateBack();
  }

  private onNavigateBack() {
    this.router.navigate(['/']);
  }


  onDeleteIngredientControl(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onAddIngredientControl(name: string, amount: string) {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(name, Validators.required),
        'amount': new FormControl(amount, Validators.required)
      })
    );
  }


}
