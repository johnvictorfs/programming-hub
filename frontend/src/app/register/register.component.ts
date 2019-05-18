import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {Credential} from './model/credential.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  credentials: Credential = {
    username: '',
    password: '',
    password2: ''
  };

  constructor(private toastr: ToastrService) {
  }

  submitRegister(): void {
    if (this.credentials.username === '' || this.credentials.password === '') {
      this.toastr.error('Você não pode deixar campos em branco.');
      return;
    }
    if (this.credentials.password !== this.credentials.password2) {
      this.toastr.error('As senhas precisam ser iguais.');
      return;
    }

    this.toastr.success(`Cadastro: ${this.credentials.username} - ${this.credentials.password}`);
  }

}
