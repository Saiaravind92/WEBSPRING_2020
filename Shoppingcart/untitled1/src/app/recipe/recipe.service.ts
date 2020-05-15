import { Recipe } from './recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { Injectable, EventEmitter} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class RecipeService {

  recipeChanged = new EventEmitter<Recipe[]>();

  // Give the link for your firebase backend
  const // @ts-ignore
  link = 'LINK';


  constructor(private _http: Http) { }

  private recipes: Recipe[] = [
    new Recipe('Stack', 'Very nice', 'http://www.proveeduriapiaf.com.ar/epiaf/images/stories/virtuemart/product/roas-beff.jpg', [
      new Ingredient('Pommes', 10),
      new Ingredient('Beff', 1)
    ]),
    new Recipe('Milk', 'Fresh', 'http://www.ziuaconstanta.ro/images/stories/2016/03/03/rodica/lapte.jpg', [])
  ];


  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(id: number){
    this.recipes.splice(id, 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const header = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.put(this.link, body, {headers: header});
  }

  fetchData(){
    this._http.get(this.link)
    .map((response: Response) => response.json())
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.recipeChanged.emit(this.recipes);
      }
    );
  }

}
