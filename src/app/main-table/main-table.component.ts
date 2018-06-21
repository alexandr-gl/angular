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
  constructor( public func: ModalComponent, public sendForm: SendFormComponent) {}
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'visit_time1', 'visit_time2', 'menu'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  showModal(id: number): void {
    this.func.openDialog();
  }
  showSendForm(): void {
    this.sendForm.openDialog();
  }
  ngOnInit() {
  }

}
