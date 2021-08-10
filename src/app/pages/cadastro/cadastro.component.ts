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
  valid = false;
  status = true;

  openSnackBar() {
    this.snackBar.open('Conta criada com sucesso!', 'OK', {
      duration: 3000,
      panelClass: 'snack-bar',
    });
  }

  submission() {
    console.log(this.cadastro.value);
    this.cadastro.reset();
  }
}
