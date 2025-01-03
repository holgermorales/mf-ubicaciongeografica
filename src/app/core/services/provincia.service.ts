import {Injectable} from '@angular/core';
import {RequestService} from './request.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private apiUrlUbicacion = `${environment.apiURL}/RS-UBICACION-GEOGRAFICA-SERVICE/api/ubicaciongeografica/provincias`;

  constructor(private requestService: RequestService) {
  }

  getProvincias(): Observable<Response> {
    return this.requestService.getRequest(`${this.apiUrlUbicacion}`, null);
  }

}
