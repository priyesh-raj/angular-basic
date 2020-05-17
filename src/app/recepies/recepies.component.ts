import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recepie } from './recepie.model'
import { RecipeService } from './recipe.service'

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecipeService,]
})
export class RecepiesComponent implements OnInit {
  // selectedEl: Recepie
  
  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    // this.recipeservice.recipeSelected
    // .subscribe(
    //   (recipe: Recepie) => {this.selectedEl = recipe}
    // )
  }

}