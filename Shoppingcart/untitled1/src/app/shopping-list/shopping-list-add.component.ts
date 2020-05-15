import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../model/ingredient.model';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() selectedIngredient: Ingredient;
  isAdd = true;
  @Output() cleared = new EventEmitter();

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.selectedIngredient.currentValue == null) {
      this.selectedIngredient = { name: null, amount: null };
      this.isAdd = true;
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);

    if (!this.isAdd) {
      // edit mode
      this.sls.editIngredient(this.selectedIngredient, newIngredient);
    } else {
      // add mode
      this.sls.addIngredient(newIngredient);
    }
    this.onClear(form);
  }

  onClear(form: NgForm) {
    this.cleared.emit();
    form.resetForm();
  }

  onDelete(form: NgForm){
    this.sls.deleteIngredient(this.selectedIngredient);
    this.onClear(form);
  }

}
