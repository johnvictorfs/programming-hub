import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Credential } from './model/credential.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  credentials: Credential = {
    username: '',
    password: '',
    keepLogged: false
  };

  submitLogin(): void {
    const loggedStr = this.credentials.keepLogged ? 'true' : 'false';
    if (this.credentials.username == '' || this.credentials.password == '') {
      return alert('Você não pode deixar campos em branco.');
    }
    alert(`Tried to slogin with ${this.credentials.username} - ${this.credentials.password} - ${loggedStr}`);
    this.router.navigate(['/']);
  }
}
