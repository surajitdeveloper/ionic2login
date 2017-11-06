import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyaccountPage } from '../myaccount/myaccount';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  error_msg: string =  "Please fill the fields";
  user = {};
  formsubmit()
  {
    
    if(this.user.game == undefined || 
      this.user.game == "" ||
    this.user.passk == undefined ||
  this.user.passk == "")
  {
    this.error_msg = "Please inser username and password";
  }
  else{
    this.error_msg = "";
    alert("submitted - " + JSON.stringify(this.user));
    //let navdata = {userid: 1, email: "", username: ""};
    //this.navCtrl.push(MyaccountPage,navdata);
  }
    
  }



}
