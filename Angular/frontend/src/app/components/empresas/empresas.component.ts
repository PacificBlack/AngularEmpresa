import { Component, OnInit } from '@angular/core';
import {EmpresasService} from "../../services/empresas.service";
import { NgForm } from "@angular/forms";
import { Empresas } from 'src/app/models/empresas';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {


  constructor(public empresasService: EmpresasService) { }

  ngOnInit(): void {
    this.getEmpresas();
  }

  resetForm(form : NgForm){
    form.reset();
  }

  getEmpresas(){
    this.empresasService.getEmpresas().subscribe(
      res => {
        this.empresasService.arregloEmpresas = res;
      },
      err => console.error(err)
    );
  }


  addEmpresa(form: NgForm){

    if(form.value._id){
      this.empresasService.updateEmpresa(form.value).subscribe(
        res => {this.getEmpresas();
          form.reset();
        },
        err => console.error(err)

      );
    }
    else{
      this.empresasService.createEmpresas(form.value).subscribe(
        res => {
          this.getEmpresas();
          form.reset();
        },
        err => console.error(err)
      );
    }

  }


  deleteEmpresa(id: string){

    const res = confirm('¿Seguro que desea eliminar esta empresa?');
    if (res) {
      this.empresasService.deleteEmpresa(id).subscribe(
        res=> this.getEmpresas(),
        err =>console.error(err)

      );
      this.getEmpresas();
    }

  }

  updateEmpresa(empresa : Empresas){
    this.empresasService.selectedEmpresa = empresa;
  }

}
