import { Component, OnInit } from '@angular/core';

import { Ingredients } from '../shared/ingredients.model'
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService,]
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredients[] = [new Ingredients('Apple',5),
  //   new Ingredients('Tomato',10)]
  ingredients: Ingredients[] = []
  constructor(private shoppinglistservice: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients=this.shoppinglistservice.getIgredients()
    this.shoppinglistservice.listUpdate
      .subscribe((ingredientArray: Ingredients[]) => {this.ingredients = ingredientArray})
    console.log('shopping-list ingredients' +this.ingredients.length)
  }

  updateShoppingList(evtData) {
    this.ingredients.push(evtData)
    console.log(JSON.stringify(this.ingredients))
  }

}