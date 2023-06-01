import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from "../../environments/environment";
import { catchError, Observable} from 'rxjs';

import { Ride } from '../models/rides.interface';
import { handleError } from '@shared/functions/handle-error-function';

@Injectable({
  providedIn: 'root',
})
export class RidesService {
  private url = environment.apiUrl;
  private endpoint = 'rides';

  constructor(private http: HttpClient) { }
  
  getRideList(): Observable<Ride[]>{
    return this.http.get<Ride[]>(this.url+this.endpoint)
    .pipe(catchError(handleError));
  }
}
