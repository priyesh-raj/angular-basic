import { Component, OnInit } from '@angular/core';

import { Recepie } from '../recepie.model'
@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[]= [
    new Recepie('Test Recepie','https://upload.wikimedia.org/wikipedia/commons/1/15/Recpie_logo.jpeg','Test Recepie Description'),
    new Recepie('Test Recepie 1','https://upload.wikimedia.org/wikipedia/commons/1/15/Recpie_logo.jpeg','Test Recepie Description 1')
  ]
  constructor() { }

  ngOnInit() {
  }

}