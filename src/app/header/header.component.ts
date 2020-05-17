import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Output() featureSelected = new EventEmitter<string>()
  constructor(private router:Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
  }
  onSelect(feature:string) {
    //this.featureSelected.emit(feature)
    if(feature === 'shopping') {
      this.router.navigate(['shopping-list'], {relativeTo: this.activatedRoute})
    }else {this.router.navigate(['recipes'], {relativeTo: this.activatedRoute})}

  }

}