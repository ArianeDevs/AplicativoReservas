import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  servicios=['corte', 'barba', 'cejas', 'limpieza_facial'];

  profesionales=['Aleatorio','Andres', 'Brayan', 'Ivan', 'Laura'];

  asignar_servicio='';
  numero=2;


  constructor() { }

  ngOnInit(): void {
  }

  CambioPagina(){

    environment.estado=this.numero;


  }

}
