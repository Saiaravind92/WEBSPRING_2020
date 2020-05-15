import { Component, OnInit, EventEmitter } from '@angular/core';
import { RecipeService } from './recipe/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSave(){
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onLoad(){
    this.recipeService.fetchData();
  }

}
