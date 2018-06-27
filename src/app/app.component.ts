// import {DataService} from './request.service';
import {Request} from './request';
import {Component, OnInit} from '@angular/core';

import {DialogOverviewExampleDialog} from './edit-dialog/edit-dialog.component';
import {SendDialogComponent} from './send-form/send-form.component';
import {log} from 'util';
import { DATA } from './element-data';
import {MatDialog} from '@angular/material';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: '<app-main-table [tableData]="tableData" (openEditForm)="openEditForm($event)" (openSendForm)="openSendForm($event)" ></app-main-table>'
})

export class AppComponent implements OnInit {
  tableData = DATA;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openEditForm(id) {
    console.log(id);
    // this.editDialogComponent.openDialog(id);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { id: id, tableData: this.tableData }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
  openSendForm(id) {
    console.log(id);
    // this.editDialogComponent.openDialog(id);
    const dialogRef = this.dialog.open(SendDialogComponent, {
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}

/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
