import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {RequestService} from './request.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParroquiaService {
  private apiUrlUbicacion = `${environment.apiURL}/RS-UBICACION-GEOGRAFICA-SERVICE/api/ubicaciongeografica/parroquias`;

  constructor(private requestService: RequestService) {
  }

  getParroquiasByCodigoProvinciaAndCodigoCanton(codigoProvincia: number, codigoCanton: number): Observable<Response> {
    return this.requestService.getRequest(`${this.apiUrlUbicacion}/${codigoProvincia}/${codigoProvincia}/cantones/${codigoCanton}/parroquias`, null);
  }
}
