import { Component } from '@angular/core';

import {Credential} from './model/credential.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  credentials: Credential = {
    username: '',
    password: '',
    keepLogged: false
  };

  submitLogin(): void {
    const loggedStr = this.credentials.keepLogged ? 'true' : 'false';

    alert(`Tried to login with ${this.credentials.username} - ${this.credentials.password} - ${loggedStr}`);
  }
}
