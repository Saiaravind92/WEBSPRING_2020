import { CoreModule } from './core.module';
import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipeService } from './recipe/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    routing,
    HttpModule,
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
