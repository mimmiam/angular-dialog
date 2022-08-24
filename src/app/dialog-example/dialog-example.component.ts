import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleFormComponent } from './dialog-example-form/dialog-example-form.component';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent {

  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
   // console.log('มา')
    let dialogRef = this.dialog.open(DialogExampleFormComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

}