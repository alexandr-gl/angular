import {Request} from './request';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export class RequestService
{
  public  ELEMENT_DATA: Request[] = [
    {id: 0, automobile: 'BMW X5', mileage: 228000, service: 'Change oil', visit_time1: '13.06.2018 12:00', visit_time2: '13.06.2018 12:00'},
    {id: 1, automobile: 'Nissan GTR', mileage: 14880,
      service: 'Change air filter', visit_time1: '14.06.2018 13:00', visit_time2: '13.06.2018 12:00'}
  ];

  rewriteData(form, id): void {
    // delete this.ELEMENT_DATA[id];
    // this.ELEMENT_DATA[id] = {
    //   id: id,
    //   automobile: form.autoData.Automobile,
    //   service: form.autoData.Service,
    //   mileage: form.autoData.Mileage,
    //   visit_time1: form.firstDate.Visit_date + ' ' + form.firstDate.Visit_time,
    //   visit_time2: form.secondDate.Visit_date + ' ' + form.secondDate.Visit_time
    // }
    this.ELEMENT_DATA[id].id = id;
    this.ELEMENT_DATA[id].automobile = form.autoData.Automobile;
    this.ELEMENT_DATA[id].service = form.autoData.Service;
    this.ELEMENT_DATA[id].mileage = form.autoData.Mileage;
    this.ELEMENT_DATA[id].visit_time1 = form.firstDate.Visit_date + ' ' + form.firstDate.Visit_time;
    this.ELEMENT_DATA[id].visit_time2 = form.secondDate.Visit_date + ' ' + form.secondDate.Visit_time;
  }
}

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getData(){
    console.log('CHECK HTTP REQ', this.http.get('element-data.ts'));
    return this.http.get('http://localhost:4200/element-data.ts');
  }
}

