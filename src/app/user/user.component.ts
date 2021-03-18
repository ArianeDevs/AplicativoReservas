import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})



export class UserComponent implements OnInit {



  nombre_user:any;

  Name:any;

  email: any;

  telephone: any;



  constructor() {


   }

  ngOnInit(): void {



  }






}
