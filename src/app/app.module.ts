
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ReservasComponent } from './reservas/reservas.component';

/*Firebase*/
import { AngularFirestoreModule} from '@angular/fire/firestore';
import  {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire';
import { from } from 'rxjs';
//import { environment } from './../environments/environment.prod';
import { environment } from './../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   RegisterComponent,
    UserComponent,
    EncabezadoComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule


  ],
  providers: [
    {provide: BUCKET, useValue:'gs://aplicativoreservas.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
