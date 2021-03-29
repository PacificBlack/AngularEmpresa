import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmpleadosService} from '../../services/empleados.service';
import {Empleados} from 'src/app/models/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  resetForm(form : NgForm){
    form.reset();
  }

  getEmpleados(){
    this.empleadosService.getEmpleados().subscribe(
      res => {
        this.empleadosService.arregloEmpleados = res;
      },
      err => console.error(err)
    );
  }

  addEmpleado(form : NgForm){
    if (form.value._id) {
      this.empleadosService.updateEmpleado(form.value).subscribe(
        res => {
          this.getEmpleados();
          form.reset();
        },
        err => console.error(err)

      );
    }
    else{
      this.empleadosService.createEmpleados(form.value).subscribe(
        res => {
          this.getEmpleados();
          form.reset();
        },
        err => console.error(err)

      );
    }
  }

  deleteEmpleado(id: string){
    const res = confirm('¿Seguro que desea eliminar esta empresa?');
    if (res) {
      this.empleadosService.deleteEmpleado(id).subscribe(
        res=> this.getEmpleados(),
        err => console.error(err)
      );
      this.getEmpleados();
    }
  }


  updateEmpleado(empleado : Empleados){
    this.empleadosService.selectedEmpleado = empleado;
  }



}
