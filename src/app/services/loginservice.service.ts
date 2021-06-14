import {Injectable} from '@angular/core';
import {UserLogin} from '../models/userLogin'
import {Observable, of} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {catchError, map} from "rxjs/operators";
import {UserLogResult} from "../models/loginResponse";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  Url: string = 'https://localhost:44340/api/authenticate';

  constructor(private http: HttpClient) {
  }

  public login(userLogin: UserLogin): Observable<UserLogResult> {
    return this.http.post<string>(
      this.Url,
      userLogin,
      {observe: 'response', responseType: 'text' as 'json'},
    ).pipe(
      map((response: HttpResponse<string>) => {
        localStorage.setItem('token', response.body as string);
        return new UserLogResult(true, '');
      }), catchError((err: HttpErrorResponse) => {
        if (err.status === 401)
          return of(new UserLogResult(false, err.error));
        return of(new UserLogResult(false, 'Ошибка сервера. Повторите попытку позже'));
      }));

  }

  public isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public logOut(): void {
    console.log(localStorage.length);
    localStorage.clear();

  }
}
