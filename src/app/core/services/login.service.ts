import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { BehaviorSubject, catchError, mapTo, Observable, tap } from 'rxjs';
import { handleError } from '@shared/functions/handle-error-function';
import { UserLogin } from '@models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.apiUrl;

  private userSource = new BehaviorSubject<any>({});
  currentUser = this.userSource.asObservable();

  constructor(private http: HttpClient) { 
    this.getUserFromSessionStorage();
  }

  changeUser(user: any) {
    this.userSource.next(user);
  }

  login(body: UserLogin): Observable<any> {
    console.log(body)

    return this.http.post<any>(`${this.url}login`, body)
      .pipe(
        tap(response => {
          if (response) {
            sessionStorage.setItem('token', response.accessToken); // Almacenar el token en sessionStorage
            sessionStorage.setItem('user', JSON.stringify(response.user));
            
            this.changeUser(response.user);
          }
        }), mapTo({
          status: true,
          message: 'Bienvenido!'
        }),
        catchError(handleError));
  }

  getUserFromSessionStorage() {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.changeUser(JSON.parse(user)); // Actualizar el valor del BehaviorSubject
    }
  }
}
