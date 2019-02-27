import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';

import { MaterialModule } from './../material.module'; 

@NgModule({
  declarations: [DialogComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogComponent],
  exports: [DialogComponent]
})
export class SharedModule {
}
