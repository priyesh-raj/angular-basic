import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recepie } from '../../recepie.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie : Recepie
  //@Output() eleDetails = new EventEmitter<Recepie>()
  constructor(private recipeservice: RecipeService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }
  
  onListClick() {
    // this.eleDetails.emit()
    //this.recipeservice.recipeSelected.emit(this.recepie)
    this.router.navigate([this.recepie.recepieName], {relativeTo: this.activeRoute})

  }

}