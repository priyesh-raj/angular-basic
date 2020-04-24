import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recepie } from './recepie.model'

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  selectedEl: Recepie
  constructor() { }

  ngOnInit() {
  }
  onSelectedRecepie(evtData) {
    this.selectedEl = evtData
  }
}