import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecepiesComponent } from "./recepies/recepies.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

const routes: Routes = [
  {path:'', component: RecepiesComponent,pathMatch:'full'},
  {path:'shopping-list', component: ShoppingListComponent},
  {path:'recipes', component: RecepiesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}