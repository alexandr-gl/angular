// export class Request{
//
//   constructor(public name: string, public status: string) { }
// }

export interface Request {
  id: number;
  automobile: string;
  mileage: number;
  service: string;
  visit_time1: string;
  visit_time2: string;
}
