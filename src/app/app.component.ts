// import {DataService} from './request.service';
import {Request} from './request';
import {Component, OnInit} from '@angular/core';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }
}

export let ELEMENT_DATA: Request[] = [
  {id: 0, automobile: 'BMW X5', mileage: 228000, service: 'Change oil', visit_time1: '13.06.2018 12:00', visit_time2: '13.06.2018 12:00'},
  {id: 1, automobile: 'Nissan GTR', mileage: 14880, service: 'Change air filter', visit_time1: '14.06.2018 13:00', visit_time2: '13.06.2018 12:00'}
];

/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
