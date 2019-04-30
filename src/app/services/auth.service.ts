import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models/Token';

const Api_Url = "https://efa-gardenapp-backend.herokuapp.com/";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { 
}

login(loginInfo){
  const str =
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
      return this._http.post(`${Api_Url}/token`, str).subscribe( (token: Token) => {
    localStorage.setItem('id_token', token.access_token);
      });
}
}
