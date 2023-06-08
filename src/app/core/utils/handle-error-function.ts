import {  HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // Error del servidor
      console.error(
        `Código de estado del servidor: ${error.status}, ` +
        `mensaje de error: ${error.error}`);
    }
    // Lanzar un error observable con un mensaje genérico y personalizado
    return throwError('Ha ocurrido un error. Por favor, intenta nuevamente más tarde.');
  }