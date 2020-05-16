import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
// import { RecipeService } from './recepies/recipe.service';
// import { ShoppingListServie } from './shopping-list/shopping.service'



@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  
  declarations: [AppComponent, HeaderComponent, RecepiesComponent, RecepieListComponent, RecepieItemComponent, RecepieDetailComponent, ShoppingListComponent, ShoppingListEditComponent, DropdownDirective],
  
  bootstrap: [AppComponent],
  
  // providers: [RecipeService,  ShoppingServie, ]
})
export class AppModule { }
