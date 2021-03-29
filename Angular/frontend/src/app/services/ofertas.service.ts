import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Ofertas} from '../models/ofertas'


@Injectable({
  providedIn: 'root'
})
export class OfertasService {

URL_OFERTAS = 'http://localhost:3000/ofertas'
URL_OFERTA = 'http://localhost:3000/oferta'
URL_REGISTRO = 'http://localhost:3000/registro-ofertas'
URL_ELIMINAR = 'http://localhost:3000/ofertas/eliminar'
URL_UPDATE = 'http://localhost:3000/ofertas/editar'

selectOferta: Ofertas = {
  id_empresa: '',
  titulo: '',
  descripcion: ''
};

 arregloOfertas: Ofertas[];

  constructor(private http: HttpClient) { }

  getOfertas(){
    return this.http.get<Ofertas[]>(this.URL_OFERTAS);
  }

  getOferta(id_empresa: string){
    return this.http.get<Ofertas[]>(this.URL_OFERTA+'/'+id_empresa);
  }

  createOferta(oferta : Ofertas){
    return this.http.post(this.URL_REGISTRO,oferta);
  }

  deleteOferta(_id: string){
    return this.http.delete(this.URL_ELIMINAR+'/'+_id);
  }

  updateOferta(oferta : Ofertas){
    return this.http.put(this.URL_UPDATE+'/'+oferta._id, oferta);
  }


}
