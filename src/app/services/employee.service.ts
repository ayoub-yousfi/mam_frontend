import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    
    return  this._http.post('https://vercel-fedk.vercel.app/data', data);

  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://vercel-fedk.vercel.app/data/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://vercel-fedk.vercel.app/data');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://vercel-fedk.vercel.app/data/${id}`);
  }
}
