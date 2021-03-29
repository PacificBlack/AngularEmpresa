import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from "../components/empresas/empresas.component";
import {OfertasComponent} from "../components/ofertas/ofertas.component";
import {EmpleadosComponent} from '../components/empleados/empleados.component';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
  {path: 'empresas', component: EmpresasComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'empleados', component: EmpleadosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
