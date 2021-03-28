import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Empresas} from '../models/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {


  URL_API = 'http://localhost:3000/empresas'
  URL_REGISTRO = 'http://localhost:3000/registro-empresas'
  URL_ELIMINAR = 'http://localhost:3000/empresa/eliminar'
  URL_UPDATE = 'http://localhost:3000/empresa/editar'

  selectedEmpresa: Empresas = {
    nit : '',
    nombre : '',
    correo : '',
    contrasena : ''
  };
  arregloEmpresas: Empresas[];

  constructor(private http: HttpClient) { }


  getEmpresas(){
    return this.http.get<Empresas[]>(this.URL_API);
  }

  createEmpresas(empresa : Empresas){
    return this.http.post(this.URL_REGISTRO, empresa);
  }

  deleteEmpresa(_id: string){
    return this.http.delete(this.URL_ELIMINAR +'/'+_id);
  }

  updateEmpresa(empresa : Empresas){
    return this.http.put(this.URL_UPDATE+'/'+empresa._id, empresa);
  }


}
