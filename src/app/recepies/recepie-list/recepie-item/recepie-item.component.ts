import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recepie } from '../../recepie.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie : Recepie
  //@Output() eleDetails = new EventEmitter<Recepie>()
  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
  }
  
  onListClick() {
    // this.eleDetails.emit()
    this.recipeservice.recipeSelected.emit(this.recepie)
  }

}