import {Component} from '@angular/core';

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

  submitRegister(): void {
    if (this.credentials.password !== this.credentials.password2) {
      alert('As senhas precisam ser iguais.');
      return;
    }

    alert(`Cadastro: ${this.credentials.username} - ${this.credentials.password}`);
  }

}
