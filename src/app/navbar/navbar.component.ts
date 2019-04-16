import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  leftItems: Array<object> = [
    { text: 'Ínicio', path: '', icon: 'fa fa-home' },
    { text: 'Novo Post', path: 'new-post', icon: 'fa fa-plus' }
  ]

  rightItems: Array<object> = [
    { text: 'Login', path: 'login', icon: 'fa fa-sign-in-alt' },
    { text: 'Nova Conta', path: 'register', icon: 'fa fa-user-plus' }
  ]
}
