import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../request.service';
import {DialogOverviewExampleDialog} from '../edit-dialog/edit-dialog.component';
import {MainTableComponent} from '../main-table/main-table.component';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  editForm: FormGroup;
  @Input() public close;
  @Input() public id;
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
  constructor(public service: RequestService, public fb: FormBuilder) {
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
  }

  ngOnInit() {
  }

  onFormSubmit(form, id): void {
    console.log('CHECK ID SUBMIT');
    this.close.close();
    this.service.rewriteData(form, id);
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
