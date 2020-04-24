import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recepie } from '../recepie.model'
import { imageUrl } from '../../shared/image';
@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output() selectedElementDetails = new EventEmitter<Recepie>()
  recepies: Recepie[]= [
    new Recepie('Test Recepie',imageUrl,'Test Recepie Description'),
    new Recepie('Test Recepie 1',imageUrl ,'Test Recepie Description 1')
  ]
  constructor() { }

  ngOnInit() {
  }
  selectedEl(evtData: Recepie) {
    console.log(evtData)
    this.selectedElementDetails.emit(evtData)
  }
  

}