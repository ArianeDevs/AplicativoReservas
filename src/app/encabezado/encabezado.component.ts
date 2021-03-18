import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  logo=environment.logo;
  nombre= environment.nombre;


  constructor() { }

  ngOnInit(): void {
  }

  asignarPagina(numero){
    environment.estado=numero;
  }

}
