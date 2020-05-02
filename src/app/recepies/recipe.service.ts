import { Injectable, EventEmitter } from '@angular/core';

import { Recepie } from './recepie.model'

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recepie>()

  recipes: Recepie[]= [
    new Recepie('Test Recepie','https://cdn.pixabay.com/photo/2018/01/13/22/41/food-3080911_960_720.jpg','Test Recepie Description'),
    new Recepie('Test Recepie 1','https://cdn.pixabay.com/photo/2018/01/13/22/41/food-3080911_960_720.jpg' ,'Test Recepie Description 1')
  ]
  constructor() { }
  
  getRecipe() {
    return this.recipes.slice()
  }

}