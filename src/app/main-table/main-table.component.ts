import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';
import {SendFormComponent} from '../send-form/send-form.component';
import {ELEMENT_DATA} from '../app.component';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'visit_time1', 'visit_time2', 'menu'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor( public func: ModalComponent, public sendForm: SendFormComponent) {}

  ngOnInit() {
  }

  showModal(id: any): void {
    console.log('>>>>EVENT', id);
    this.func.openDialog(id);
  }

  showSendForm(): void {
    this.sendForm.openDialog();
  }
}

// @Component({
//   selector: 'app-main-table-menu',
//   template: `<mat-menu #menu="matMenu">
//     <button mat-menu-item (click)='showModal()'>Edit</button>
//     <button mat-menu-item (click)='showSendForm()'>Send</button>
//   </mat-menu>`
// })
// export class MainTableMenuComponent implements OnInit {
//   ngOnInit() {
//   }
// }
