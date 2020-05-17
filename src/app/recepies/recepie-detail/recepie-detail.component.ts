import { Component, OnInit, Input } from '@angular/core';

import { Recepie } from '../recepie.model'
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, } from '@angular/router';
@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  elementDesc: Recepie
  selected: string

  constructor(private recipeService: RecipeService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.elementDesc = this.recipeService.elementDesc(params.get('name')) })
    
  }

}