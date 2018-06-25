import { Component, OnInit, OnDestroy, ElementRef, Input, Inject, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AppComponent, ELEMENT_DATA} from '../app.component';
import {NgForm, FormBuilder, FormGroup, Validators, FormsModule, ValidatorFn, AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  id: number;

  constructor(public dialog: MatDialog) {}
  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      panelClass: 'custom-dialog-container',
      data: { id }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  ngOnInit() {
    console.log('WE ARE NOT HERE!!!');
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  editForm: FormGroup;
  userDate: any;
  // Automobile:string='';
  // Service:string='';
  // Mileage:number=null;
  // Visit_date1:string='';
  // Visit_time1:string='';
  // Visit_date2:string='';
  // Visit_time2:string='';

  // public checkDateValue;
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
    @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder) {
    this.editForm = fb.group({
      autoData: fb.group({
        'Automobile': [null, Validators.required],
        'Service': [null, Validators.required],
        'Mileage': [null, Validators.required]
      }),
      firstDate: fb.group({
        'Visit_date': [null, Validators.required],
        'Visit_time': [null, Validators.required]
      }, {validator: this.controlDate}),
      secondDate: fb.group({
        'Visit_date': [null, Validators.required],
        'Visit_time': [null, Validators.required]
      }, {validator: this.controlDate})
    });
    console.log('WE ARE IN CONSTRUCTOR');
  }

  onFormSubmit(form, id): void {
    console.log('CHECK ID', id);
    this.dialogRef.close();
    ELEMENT_DATA[id].id = id;
    ELEMENT_DATA[id].automobile = form.autoData.Automobile;
    ELEMENT_DATA[id].service = form.autoData.Service;
    ELEMENT_DATA[id].mileage = form.autoData.Mileage;
    ELEMENT_DATA[id].visit_time1 = form.firstDate.Visit_date + ' ' + form.firstDate.Visit_time;
    ELEMENT_DATA[id].visit_time2 = form.secondDate.Visit_date + ' ' + form.secondDate.Visit_time;
    console.log('ELMENT_DATA', ELEMENT_DATA);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  controlDate(control: FormGroup): Validators {
    const date = control.value.Visit_date + ' ' + control.value.Visit_time;
    if (date.length === 16) {
      const now = +new Date() + 3600000;
      const userDate =  +new Date(+date.substr(6, 4), +date.substr(3, 2) - 1,
        +date.substr(0 , 2), +date.substr(11, 2),
        +date.substr(14, 2));
      console.log('CHECK DATE', now - userDate, now <= userDate);
        if (now > userDate) {
          const error = 'Invalid date';
          console.log(error);
          return error;
        }
        else {console.log('Valid date'); return null;}
      }
      else {
        const error = 'Enter date';
        console.log(error);
        return error;
      }
    }
  }
