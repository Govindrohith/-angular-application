import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }


  getAllUsers():Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/users')
  }
}
