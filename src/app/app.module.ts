import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatSelectModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DatatableCheckboxComponent } from './datatable-checkbox/datatable-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    DatatableCheckboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
