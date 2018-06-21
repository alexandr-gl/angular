import { Component, OnInit, OnDestroy, ElementRef, Input, Inject, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AppComponent, ELEMENT_DATA} from '../app.component';
import {NgForm, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      panelClass: 'custom-dialog-container',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  ngOnInit() {
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  public checkDateValue;
  public maskDate = {
    guide: true,
    showMask : false,
    mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]
  };
  public maskTime = {
    guide: true,
    showMask : false,
    mask: [/\d/, /\d/, ':', /\d/, /\d/]
  };
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(myForm: NgForm, id: number): void {
    console.log('>>> CHECK FORM', myForm);
    console.log('>>>ELEMENT DATA BEFORE', ELEMENT_DATA[id]);
    ELEMENT_DATA[id].id = id;
    ELEMENT_DATA[id].automobile = myForm.value.automobile;
    ELEMENT_DATA[id].service = myForm.value.service;
    ELEMENT_DATA[id].mileage = myForm.value.mileage
    ELEMENT_DATA[id].visit_time1 = myForm.value.visit_date1 + ' ' + myForm.value.visit_time1;
    ELEMENT_DATA[id].visit_time2 = myForm.value.visit_date2 + ' ' + myForm.value.visit_time2;
    console.log('DATE', new Date(2011, 0, 1, 1, 1, 1, 0));
  }
  checkDatePrep(date: string, time: string) {
    const month =  +date.substr(3, 2) - 1;
    const userDate = new Date(+date.substr(6, 4), month,
    +date.substr(0 , 2), +time.substr(0, 2),
    +time.substr(3, 2));
    let now = +new Date() + 3600000;
    console.log('CHECK TIME', now.toString(), userDate.toString(), now < +userDate, now - (+userDate))
    if (now < (+userDate)) {
      return true;
    }
    else {
      return false;
    }
  }
  checkDate(date: string, time: string, date1: string, time1: string) {
    console.log("CHECK CONDITION", date && time && date1 && time1);
    if (date && time && date1 && time1) {
      this.checkDateValue = this.checkDatePrep(date, time) && this.checkDatePrep(date1, time1);
      console.log('CHECK DATE VALUE', this.checkDateValue);
    }
    return;
  }
}
