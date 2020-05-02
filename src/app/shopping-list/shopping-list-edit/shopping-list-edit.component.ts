import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';

import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('itemAdded') itemNameRef: ElementRef
  @ViewChild('amountAdded') amountRef: ElementRef
  //@Output() listAdd = new EventEmitter<any>()

  constructor(private shoppinglistservice: ShoppingListService,) { }

  ngOnInit() {
  }

  onAdd() {
  //  this.listAdd.emit(new Ingredients(this.itemNameRef.nativeElement.value,this.amountRef.nativeElement.value) )
  this.shoppinglistservice.onListAdd(new Ingredients
  (this.itemNameRef.nativeElement.value,
  this.amountRef.nativeElement.value))
  }

}