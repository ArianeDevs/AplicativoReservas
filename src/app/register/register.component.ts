import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  logo='/assets/barber2.jpg';
  user='';
  pass='';

  edad: number=28;

  constructor() {

   }

  ngOnInit(): void {
  }

}
