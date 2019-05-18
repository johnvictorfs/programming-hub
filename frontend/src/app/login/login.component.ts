import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {Credential} from './model/credential.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
  }

  credentials: Credential = {
    username: '',
    password: '',
    keepLogged: false
  };

  submitLogin(): void {
    const loggedStr = this.credentials.keepLogged ? 'true' : 'false';
    if (this.credentials.username == '' || this.credentials.password == '') {
      this.toastr.error('Você não pode deixar campos em branco.');
      return;
    }
    this.toastr.success(`Tried to login with ${this.credentials.username} - ${this.credentials.password} - ${loggedStr}`);
    this.router.navigate(['/']).then();
  }
}
