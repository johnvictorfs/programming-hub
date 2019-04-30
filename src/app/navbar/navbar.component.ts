import { Component } from '@angular/core';

import { NavItem } from './model/navitem.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  leftItems: Array<NavItem> = [
    { text: 'Ínicio', path: '', icon: 'fa fa-home mr-2', type: 'btn-primary' },
    { text: 'Novo Post', path: 'new-post', icon: 'fa fa-plus mr-2', type: 'btn-success' }
  ];

  rightItems: Array<NavItem> = [
    { text: 'Login', path: 'login', icon: 'fa fa-sign-in-alt mr-2', type: 'btn-success' },
    { text: 'Nova Conta', path: 'register', icon: 'fa fa-user-plus mr-2', type: 'btn-warning' }
  ];
}
