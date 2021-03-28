import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Empresas} from '../models/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {


  URL_API = 'http://localhost:3000/empresas'

  arregloEmpresas: Empresas[];

  constructor(private http: HttpClient) { }


  getEmpresas(){
    return this.http.get<Empresas[]>(this.URL_API);
  }



}
