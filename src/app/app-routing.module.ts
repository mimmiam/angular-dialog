import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

const routes: Routes = [
  { path: '', component: DialogExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
