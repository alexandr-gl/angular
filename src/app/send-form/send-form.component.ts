import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css']
})
export class SendFormComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  openDialog(id: any): void {
    const dialogRef = this.dialog.open(SendDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: { id },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
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
  public active = false;
  constructor(
    public element_data: RequestService,
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
