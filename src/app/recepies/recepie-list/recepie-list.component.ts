import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recepie } from '../recepie.model'
// import { imageUrl } from '../../shared/image';
@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output() selectedElementDetails = new EventEmitter<Recepie>()
  recepies: Recepie[]= [
    new Recepie('Test Recepie','https://cdn.pixabay.com/photo/2018/01/13/22/41/food-3080911_960_720.jpg','Test Recepie Description'),
    new Recepie('Test Recepie 1','https://cdn.pixabay.com/photo/2018/01/13/22/41/food-3080911_960_720.jpg' ,'Test Recepie Description 1')
  ]
  constructor() { }

  ngOnInit() {
  }
  selectedEl(evtData: Recepie) {
    console.log(evtData)
    this.selectedElementDetails.emit(evtData)
  }
  

}