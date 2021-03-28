import { Component, OnInit } from '@angular/core';
import {EmpresasService} from "../../services/empresas.service";

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

  getEmpresas(){
    this.empresasService.getEmpresas().subscribe(
      res => {
        this.empresasService.arregloEmpresas = res;
      },
      err => console.error(err)
    );
  }

}
