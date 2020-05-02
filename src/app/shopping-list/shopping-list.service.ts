import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Ingredients } from '../shared/ingredients.model'

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredients[] = [new Ingredients('Apple', 5),
  new Ingredients('Tomato', 10)]
  
  constructor() { }

  getIgredients(){
    return this.ingredients.slice()
  }
  onListAdd(newIngredient: Ingredients) {
    this.ingredients.push(newIngredient)
    console.log(this.ingredients.length)
  }
}