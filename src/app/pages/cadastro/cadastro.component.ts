import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  cadastro = new FormGroup({
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
    confirmpassword: new FormControl('', Validators.required),
  });

  openSnackBar() {
    this.snackBar.open('Conta criada com sucesso!','OK' ,{duration:3000});
  }

  submission() {
    console.log(this.cadastro.value);
    this.cadastro.reset();
  }

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}
}
