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

  login(credenciales): Observable<any>{
    let url = dominio+"/login";
    return this.http.post(url,credenciales, HttpHeader);
  }

  isLogin(){
    let islog =localStorage.getItem("isLogin") === "Accepted";
    return islog;
  }

  guardarToken(){
    localStorage.setItem("isLogin","Accepted");
  }

  logout(){
    localStorage.removeItem("isLogin");
  }

  getDoctores():Observable<any>{
    let url = dominio + '/doctor';
    return this.http.get(url,HttpHeader);
  }

  getAudios():Observable<any>{
    let url = dominio + '/audios';
    return this.http.get(url,HttpHeader);
  }

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
