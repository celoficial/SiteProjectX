import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  login = new FormGroup({
    email : new FormControl('', [Validators.email, Validators.required]),
    senha : new FormControl('', [Validators.required])
  })

  constructor() {
    
    
  }



}