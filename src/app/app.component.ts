// import {DataService} from './request.service';
import {Request} from './request';
import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {ModalService} from './modal/modal.service';
import {ModalComponent} from './modal/modal.component';
import {DialogOverviewExampleDialog} from './modal/modal.component'
import {MatDialog} from '@angular/material';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor( public func: ModalComponent) {}
  private bodyText: string;
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'visit_time1', 'visit_time2', 'menu'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  showModal(id: number): void {
    console.log('CHECK ID', id);
    this.func.openDialog();
  }
  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }
}

export let ELEMENT_DATA: Request[] = [
  {id: 0, automobile: 'BMW X5', mileage: 228000, service: 'Change oil', visit_time1: '13.06.2018 12:00', visit_time2: '13.06.2018 12:00'},
  {id: 1, automobile: 'Nissan GTR', mileage: 14880, service: 'Change air filter', visit_time1: '14.06.2018 13:00', visit_time2: '13.06.2018 12:00'}
];

/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
