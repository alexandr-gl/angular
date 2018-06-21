import {Request} from './request';

export class DataService {

  // private data: Request[] = [
  //   { name:"Learn Typescript", status: 'undone'},
  //   { name: "Learn Angular", status: 'undone'}
  // ];
  private data: Request[] =  [
    {id: 0, automobile: 'BMW X5', mileage: 228000, service: 'Change oil', visit_time1: '13.06.2018 12:00', visit_time2: '13.06.2018 12:00'},
    {id: 1, automobile: 'Nissan GTR', mileage: 14880, service: 'Change air filter', visit_time1: '14.06.2018 13:00', visit_time2: '13.06.2018 12:00'}
  ];
  getData(): Request[] {

    return this.data;
  }
  // addData(name: string, status: string){
  //
  //   this.data.push(new Request(name, status));
  //   console.log("DATA", this.data);
  // }
}

