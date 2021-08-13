import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmPasswordValidator } from 'src/app/shared/confirm-password.validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  
  valid = false;
  status = true;
  cadastro = new FormGroup(
    {
      username: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      usernick: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      birth: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmpassword: new FormControl('', [Validators.required]),
    },
    {
      validators: [ConfirmPasswordValidator('password', 'confirmpassword')],
    }
  );

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}

  onSignIn(googleUser: any) {
    //SameSite cookie error
    // Useful data for your client-side scripts:
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);
  }



  openSnackBar() {
    this.snackBar.open('Conta criada com sucesso!', 'OK', {
      duration: 3000,
      panelClass: 'snack-bar',
    });
  }


  submission() {
    console.log(this.cadastro.value);
    this.openSnackBar();
    this.cadastro.reset();
  }
}
