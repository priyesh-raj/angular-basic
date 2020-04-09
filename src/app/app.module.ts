import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { warningAlertComponent } from './warningalert/warningalert.component';
import { successAlertComponent } from './successalert/successalert.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ],
  declarations: [ AppComponent, HelloComponent, warningAlertComponent, successAlertComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
