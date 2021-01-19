import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormGroupComponent } from './reactive-form-group/reactive-form-group.component';
import { DynamicallyAddControlsComponent } from './dynamically-add-controls/dynamically-add-controls.component';
import { StyledReactiveFormComponent } from './styled-reactive-form/styled-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ReactiveFormGroupComponent,
    DynamicallyAddControlsComponent,
    StyledReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
