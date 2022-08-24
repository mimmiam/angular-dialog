import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DialogExampleFormComponent } from './dialog-example/dialog-example-form/dialog-example-form.component';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    DialogExampleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
