import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import { catchError, Observable} from 'rxjs';
import { handleError } from '@core/utils/handle-error-function';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {
  private url = environment.apiUrl;
  private endpoint = 'moderators';
  constructor(private http: HttpClient) { }
  
  getmoderatorsList(): Observable<any[]>{
    return this.http.get<any[]>(this.url+this.endpoint)
    .pipe(catchError(handleError));
  }
}
