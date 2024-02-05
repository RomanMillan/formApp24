import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../interfaces/userRegister';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url : string = 'http://localhost:3000/users/';
  constructor(private http: HttpClient) { }

  addUser(user: UserRegister):Observable<UserRegister>{
    return this.http.post<UserRegister>(this.url,user);
  }

}
