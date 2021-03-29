import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Empleados } from "../models/empleados";

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  URL_API = 'http://localhost:3000/empleados'
  URL_REGISTRO = 'http://localhost:3000/registro-empleados'
  URL_ELIMINAR = 'http://localhost:3000/empleado/eliminar'
  URL_EDITAR = 'http://localhost:3000/empleado/editar'

  selectedEmpleado: Empleados = {
    nombre : '',
    identificacion : '',
    correo : '',
    contrasena : ''
  }
  arregloEmpleados: Empleados[];
  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get<Empleados[]>(this.URL_API);
  }
  createEmpleados(empleado : Empleados){
    return this.http.post(this.URL_REGISTRO, empleado);
  }
  deleteEmpleado(_id: string){
    return this.http.delete(this.URL_ELIMINAR+'/'+_id);
  }
  updateEmpleado(empleado : Empleados){
    return this.http.put(this.URL_EDITAR+'/'+empleado._id, empleado);
  }


}
