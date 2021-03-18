// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {of} from "rxjs"

export const environment = {
  production: false,
  logo :'/assets/barbero1.jpg',
  nombre: '   BARBER-ZONE',
  estado: 1,
  firebaseConfig: {
    apiKey: "AIzaSyCzt5izhCWzRu1mIR6VEwT4obUqPxe0fjA",
    authDomain: "aplicativoreservas.firebaseapp.com",
    databaseURL: "https://aplicativoreservas-default-rtdb.firebaseio.com",
    projectId: "aplicativoreservas",
    storageBucket: "aplicativoreservas.appspot.com",
    messagingSenderId: "1003724595684",
    appId: "1:1003724595684:web:a83dd86d7fe6a3afede7f1",
    measurementId: "G-92H8RZ2PXC"
  }
};


export const observador$ = of({

  production: false,
  logo :'/assets/barbero1.jpg',
  nombre: '   BARBER-ZONE',
  estado: 1
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional


});
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
