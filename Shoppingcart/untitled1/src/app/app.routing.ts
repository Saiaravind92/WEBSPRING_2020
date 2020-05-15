import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router'
import { RecipeComponent } from './recipe/recipe.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren: 'app/recipe/recipe.module#RecipeModule' },
    { path: 'shoppinglist', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
