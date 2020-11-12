import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermodel } from './usermodel.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:Usermodel
  apiurl:String='http://localhost:3000'
  constructor(private http: HttpClient) { }
  signup() {
    return this.http.post<any>(this.apiurl + `/signup`, this.user)
  }
  signin() {
    return this.http.post<any>(this.apiurl + `/signin`, this.user)
  }
  aftersingup(data:{}) {
    return this.http.post<any>(this.apiurl + `/aftersingup`, data)
  }
}
