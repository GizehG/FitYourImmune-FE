import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const dominio = environment.apiUrl;
const HttpHeader = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})


export class FormulariosService {

  constructor(private http: HttpClient) { }

  savePaciente(datos):Observable<any>{
    let url = dominio + '/paciente';
    return this.http.post(url,datos, HttpHeader);
  }

  saveSOS(datos):Observable<any>{
    let url = dominio + '/SOS';
    return this.http.post(url,datos, HttpHeader);
  }

  saveHistoria(datos):Observable<any>{
    let url = dominio + '/historia';
    return this.http.post(url,datos, HttpHeader);
  }
}
