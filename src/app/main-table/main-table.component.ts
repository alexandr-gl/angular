import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SendFormComponent} from '../send-form/send-form.component';
// import {RequestService, HttpService} from '../request.service';
// import { HttpClient} from '@angular/common/http';
import {DATA} from '../element-data';


@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  @Input() tableData = [];

  @Output() openEditForm = new EventEmitter<number>();
  @Output() openSendForm = new EventEmitter<number>();

  displayedColumns = ['id', 'automobile', 'mileage', 'service', 'visit_time1', 'visit_time2', 'menu'];
  dataSource = []; // = new MatTableDataSource(this.tableData);
  // check_data;

  constructor(
    public sendForm: SendFormComponent,
    // public elementData: RequestService,
    // private httpService: HttpService
  ) {}

  ngOnInit() {
    // this.httpService.getData().subscribe(data => this.check_data = data)
    console.log('OOOOO', this.tableData);
    this.dataSource = this.tableData;
  }

  showModal(id: any): void {
    console.log('>>>>EVENT', id);
    this.openEditForm.emit(id.id);
  }

  showSendForm(id: any): void {
    this.openSendForm.emit(id);
  }
}
