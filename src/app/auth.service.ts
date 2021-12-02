import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registrationurl = "http://localhost:3000/auth/register";
  private _loginurl = "http://localhost:3000/auth/login";


  constructor(private _http : HttpClient) { }

  registration(user){
    return(this._http.post<any>(this._registrationurl,user))
  }

  login(user){
    return(this._http.post<any>(this._loginurl,user));
  }

  isLoggedIn(){
    return !!sessionStorage.getItem('authtoken')
  }
  getToken(){
    
    console.log("Get token : "+sessionStorage.getItem('authtoken'));
    return sessionStorage.getItem('authtoken');
     
  }
    
}
