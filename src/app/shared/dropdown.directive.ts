import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false
  constructor(private eleRef: ElementRef,) { }
  
  @HostListener('document:click',['$event']) onDropdownOpen(evtData: Event){
    this.isOpen=this.eleRef.nativeElement.contains(evtData.target)? !this.isOpen: false
  } 
}