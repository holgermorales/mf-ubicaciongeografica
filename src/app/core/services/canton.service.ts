import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {RequestService} from './request.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CantonService {
  private apiUrlUbicacion = `${environment.apiURL}/RS-UBICACION-GEOGRAFICA-SERVICE/api/ubicaciongeografica/cantones`;

  constructor(private requestService: RequestService) {
  }

  getCantonesByCodigoProvincia(codigoProvincia: number): Observable<Response> {
    return this.requestService.getRequest(`${this.apiUrlUbicacion}/${codigoProvincia}/cantones`, null);
  }
}
