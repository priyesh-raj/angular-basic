import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecepiesComponent } from "./recepies/recepies.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecepieDetailComponent } from "./recepies/recepie-detail/recepie-detail.component";
import { RecepieStartComponent } from "./recepies/recepie-start/recepie-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";


const routes: Routes = [
  {path:'', component: RecepiesComponent,pathMatch:'full'},
  {path:'shopping-list', component: ShoppingListComponent},
  {path:'recipes', component: RecepiesComponent, children: [
    {path:'', component: RecepieStartComponent, pathMatch:'full'},
    {path: ':name', component: RecepieDetailComponent},
    {path:'edit', component: RecepieStartComponent},
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}