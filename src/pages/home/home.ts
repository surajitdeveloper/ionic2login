import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController
) {}

  log(){
    this.nav.push(LoginPage);
  }

  reg(){
    this.nav.push(RegisterPage);
  }

}
