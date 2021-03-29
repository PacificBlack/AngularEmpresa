import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { OfertasService } from '../../services/ofertas.service';
import {Ofertas} from 'src/app/models/ofertas';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  constructor(public ofertasService: OfertasService) {  }

  ngOnInit(): void {
    this.getOfertas();
  }

  resetForm(form : NgForm){
    form.reset();
  }

  getOfertas(){
    this.ofertasService.getOfertas().subscribe(
      res => {
        this.ofertasService.arregloOfertas = res;
      },
      err => console.error(err)
    );
  }

  addOfertas(form: NgForm){
    if(form.value._id){
      this.ofertasService.updateOferta(form.value).subscribe(
        res => {
          this.getOfertas();
          form.reset();
        },
        err => console.error(err)
      );
    }

    else{
      this.ofertasService.createOferta(form.value).subscribe(
        res=> {
          this.getOfertas();
          form.reset();
        },
        err => console.error(err)
      );
    }
  }



  deleteOferta(id: string){
    const res = confirm('¿Seguro que desea eliminar esta empresa?');

    if (res) {
      this.ofertasService.deleteOferta(id).subscribe(
        res=> this.getOfertas(),
        err =>console.error(err)

      );
      this.getOfertas();
    }
  }



  updateOferta(oferta : Ofertas){
    this.ofertasService.selectOferta = oferta;
  }


}
