import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';
import {ELEMENT_DATA} from '../app.component';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css']
})
export class SendFormComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    let dialogRef = this.dialog.open(SendDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'app-send-dialog',
  templateUrl: 'send-form.component.html',
})
export class SendDialogComponent {
  public element_data = ELEMENT_DATA;
  public active = false;
  constructor(
    public dialogRef: MatDialogRef<SendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  discount(li): void {
    if (li.style.border === '1px solid black') {
      li.style.border = '1px solid springgreen';
    }
    else {
      li.style.border = '1px solid black';
    }
  }
}
