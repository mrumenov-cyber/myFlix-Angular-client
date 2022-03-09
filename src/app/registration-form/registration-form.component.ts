import { Component, OnInit, Input } from '@angular/core';
//Using this import to close the dialog on success
import {MatDialogRef} from '@angular/material/dialog';
//This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';
//This import is used to display nortifications back to the user
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<RegistrationFormComponent>,
    public snackBar: MatSnackBar) { }

ngOnInit(): void {
}

  // This is the function responsible for sending the form inputs to the backend
registerUser(): void {
      this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
    // Logic for a successful user registration goes here! (To be implemented)
      this.dialogRef.close(); // This will close the modal on success!
      console.log(result);
      this.snackBar.open(result, 'OK', {
          duration: 2000
      });
      }, (result) => {
        console.log(result);
        this.snackBar.open(result, 'OK', {
          duration: 2000
        });
      });
    }

  }