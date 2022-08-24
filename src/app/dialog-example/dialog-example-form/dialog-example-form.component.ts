import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example.component';

@Component({
  selector: 'app-dialog-example-form',
  templateUrl: './dialog-example-form.component.html',
  styleUrls: ['./dialog-example-form.component.css']
})
export class DialogExampleFormComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
    this.dialogRef.close();
  }

}
