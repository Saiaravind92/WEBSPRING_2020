import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  selectedIng: Ingredient;

  constructor(private sls: ShoppingListService) { }

  onSelectItem(ingredient: Ingredient){
    this.selectedIng = ingredient;
    console.log("Selected ingredient: "+this.selectedIng);
  }

  onCleared(){
    this.selectedIng = null;
    console.log(this.selectedIng);
  }

  ngOnInit() {
    this.ingredients = this.sls.getIngredients();
  }
  

}
