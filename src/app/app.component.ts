import { Component } from '@angular/core';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFlix-Angular-client';

  constructor(public dialog: MatDialog)
  {}
  //This is the function that will open the dialog when the signup button is clicked
  openRegistrationDialog(): void{
    this.dialog.open(RegistrationFormComponent, {
      //Assigning the dialog a width
      width: '280px'
    });
  }

  openLoginDialog(): void{
    this.dialog.open(LoginFormComponent, {
      width: '280px'
    });
  }
}

