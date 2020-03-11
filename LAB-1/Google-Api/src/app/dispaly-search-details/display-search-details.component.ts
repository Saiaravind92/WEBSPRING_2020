import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-recipe-details',
  templateUrl: './display-search-details.component.html',
  styleUrls: ['./display-search-details.component.css']
})
export class DisplayRecipeDetailsComponent implements OnInit {

  @Input() recipeDetails: any;
  constructor() { }

  ngOnInit() {
  }

}
