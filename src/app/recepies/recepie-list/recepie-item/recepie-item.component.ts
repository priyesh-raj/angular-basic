import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie : Recepie
  @Output() eleDetails = new EventEmitter<Recepie>()
  constructor() { }

  ngOnInit() {
  }
  
  onListClick() {
    this.eleDetails.emit()
  }

}