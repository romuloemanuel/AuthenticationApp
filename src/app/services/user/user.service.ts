import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login-model';
import { Register } from 'src/app/models/register-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "https://localhost:49153/api"
  constructor(private _http: HttpClient) {
  }

  login(login: Login): Observable<any> {
    return this._http.post<any>(this.url + '/user', login);
  }

  register(register: Register): Observable<any> {
    return this._http.post<any>(this.url + '/user/register', register);
  }
}
