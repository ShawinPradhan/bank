import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../customer';
import { Observable } from 'rxjs';

const REGISTER_API = 'http://localhost:8086/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAllCustomer(): Observable<Customer[]>
  {
   return this.http.get<Customer[]>(REGISTER_API+'getAllAccountDetails',httpOptions);
  }

  register(customer: Customer): Observable<Object>
{
return this.http.post<any>(REGISTER_API + 'createAccount',customer,
  httpOptions);
}

}
