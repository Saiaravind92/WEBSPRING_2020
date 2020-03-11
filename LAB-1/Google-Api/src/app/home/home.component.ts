import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { DisplayRecipeDetailsComponent} from '../dispaly-search-details/display-search-details.component';
import { ControlMessagesComponent} from '../control-messages/control-messages.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recipeDetails: any;
  searchForm: FormGroup;


  constructor( private http: HttpClient, private fb: FormBuilder) { }



  ngOnInit() {
    this.searchForm = this.fb.group({
      recipeName: ['Taylor Swift', [Validators.required]]
    });

    this.getRecipeDetails();
  }

  getRecipeDetails(): void {

    // tslint:disable-next-line:max-line-length
    this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.searchForm.controls.recipeName.value + '&key=AIzaSyC0Ogdni0rldptqNw23nFpqQtrDTN4pEk4').subscribe(data => {
      this.recipeDetails = data;
      console.log(data);
    });

    // responsiveVoice.speak(this.searchrecipeForm.controls.reciperecipe.value );
  }
}
