import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'antpack';
  constructor(private _snackBar: MatSnackBar) {}

  showMessage():void {
    this._snackBar.open("hola soy Jeison", "cerrar", {
      duration: 3000
    })
  }
}
