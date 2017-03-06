import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
//import * as FileSaver from 'file-saver';

import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { Temp1Component } from './temp1/temp1.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    
    AppRoutingModule,
    //CoreComponentModule
  ],
  declarations: [
    AppComponent,
    Temp1Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
