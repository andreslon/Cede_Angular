import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface CustomData {
  message: string;
  title: string;
  hasCancel: boolean ;
}
@Component({
  selector: 'sec-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
} 
