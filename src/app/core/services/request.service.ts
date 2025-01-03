import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private httpHeader: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  constructor(private httpClient: HttpClient) {
  }

  public postRequest(url: string, param: any): Observable<Response> {
    if (param === null || param === '') {
      return this.httpClient.post<Response>(url, {headers: this.httpHeader});
    } else {
      param = this.encodeParams(param);
      return this.httpClient.post<Response>(url, param, {headers: this.httpHeader});
    }
  }

  public getRequest(url: string, param: any): Observable<Response> {
    if (param) {
      const httpParams = new HttpParams({fromObject: param});
      return this.httpClient.get<Response>(url, {headers: this.httpHeader, params: httpParams});
    }
    return this.httpClient.get<Response>(url, {headers: this.httpHeader});
  }

  private encodeParams(param: any) {
    return JSON.stringify({
      dato: window.btoa(encodeURIComponent(JSON.stringify(param)))
    });
  }
}
