import { Injectable, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs'
import { Ingredients } from '../shared/ingredients.model'

@Injectable()
export class ShoppingListService {
  listUpdate = new EventEmitter<Ingredients[]>()
  private ingredients: Ingredients[] = [new Ingredients('Apple', 5),
  new Ingredients('Tomato', 10)]
  
  constructor() { }

  getIgredients(){
    return this.ingredients.slice()
  }
  onListAdd(newIngredient: Ingredients) {
    this.ingredients.push(newIngredient)
    this.listUpdate.emit(this.ingredients.slice())
    console.log(this.ingredients.length)
  }
}