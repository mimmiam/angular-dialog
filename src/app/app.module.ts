import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//สำคัญมากกก ถ้าไม่มี modal จะไม่ขึ้น
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//สร้าง material.modul แยกอีกไฟล์ แล้วเรียกใช้ ไฟล์หลักจะได้ไม่รก
import {MaterialExampleModule} from '../material.module';
//เอาไว้เรียกใช้พวก form
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DialogExampleFormComponent } from './dialog-example/dialog-example-form/dialog-example-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    DialogExampleFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
