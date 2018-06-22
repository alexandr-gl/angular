import { Component, OnInit, OnDestroy, ElementRef, Input, Inject, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AppComponent, ELEMENT_DATA} from '../app.component';
import {NgForm,  FormBuilder, FormGroup, Validators, FormsModule, ValidatorFn, AbstractControl} from '@angular/forms';

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
        'Visit_date1': [null, [Validators.required, this.forbiddenNameValidator(this.editForm.value.firstDate.Visit_date1, this.editForm.value.firstDate.Visit_time1)]],
        'Visit_time1': [null, Validators.required]
      }),
      secondDate: fb.group({
        'Visit_date2': [null, Validators.required],
        'Visit_time2': [null, Validators.required]
      })
    });
  }

  onFormSubmit(form, id): void {
    console.log(this.editForm, form);
    this.dialogRef.close();
    ELEMENT_DATA[id].id = id;
    ELEMENT_DATA[id].automobile = form.autoData.Automobile;
    ELEMENT_DATA[id].service = form.autoData.Service;
    ELEMENT_DATA[id].mileage = form.autoData.Mileage
    ELEMENT_DATA[id].visit_time1 = form.firstDate.Visit_date1 + ' ' + form.firstDate.Visit_time1;
    ELEMENT_DATA[id].visit_time2 = form.secondDate.Visit_date2 + ' ' + form.secondDate.Visit_time2;
    console.log('ELMENT_DATA', ELEMENT_DATA);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  checkDatePrep(date: string, time: string) {
    const month =  +date.substr(3, 2) - 1;
    const userDate = new Date(+date.substr(6, 4), month,
    +date.substr(0 , 2));
    let now = +new Date() + 3600000;
    const error = 'Invalid date';
    if (now < (+userDate)) {
      return true;
    }
    else {
      return false;
    }
  }
  checkDate(date: string, time: string) {
    console.log('Check entries', date, time, date && time);
    if (date && time) {
      // this.checkDateValue = this.checkDatePrep(date, time) && this.checkDatePrep(date1, time1);
      console.log('AAAAA', !this.checkDatePrep(date, time));
      if (!this.checkDatePrep(date, time)) {
        const error = 'Invalid date';
        return error;
      }
      else {return null;}
    }
    else {
      const error = 'Enter date';
      return error;
    }
  }
  forbiddenNameValidator(date: string, time: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = this.checkDate(date, time);
      console.log('We ARE IN VALIDATOR', forbidden, 'date:', date, 'time:', time);
      return forbidden ? {'forbiddenName': {value: 'Invalid data'}} : null;
    };
  }
}


// , +time.substr(0, 2),
//   +time.substr(3, 2)
