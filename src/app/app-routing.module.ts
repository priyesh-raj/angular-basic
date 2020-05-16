import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecepiesComponent } from "./recepies/recepies.component";

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

const routes: Routes = [
  {path:'shopping-list', component: ShoppingListComponent},
  {path:'recipes', component: RecepiesComponent}
]

export class AppRoutingModule {}