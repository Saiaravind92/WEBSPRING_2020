import { recipeRouting } from './recipe.routing';
import { RecipeStartComponent } from './recipe-start.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeComponent,
        RecipeItemComponent,
        RecipeStartComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        recipeRouting
    ]
})

export class RecipeModule {

}