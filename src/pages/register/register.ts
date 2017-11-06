import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  error_msg: string =  "Please fill the fields";
  user = {};
  formsubmit()
  {
    //alert("submitted -" + JSON.stringify(this.user));

    if(
      this.user.username == undefined ||
      this.user.username == "" ||
      this.user.emailid == undefined ||
      this.user.emailid == '' ||
      this.user.password == undefined ||
      this.user.password == ""
    ){
      let err_msg_local : string = "";
      if(
        this.user.username == undefined ||
        this.user.username == ""
      ){
        err_msg_local = err_msg_local + "fill username  ";
      }

      if(
        this.user.emailid == undefined ||
        this.user.emailid == '' 
      ){
        err_msg_local = err_msg_local + "fill email id ";
      }

      if(
        this.user.password == undefined ||
        this.user.password == ""
      ){
        err_msg_local = err_msg_local + "fill password ";
      }
      this.error_msg = err_msg_local;
    }
    else{
      this.error_msg = "";
    }


  }



}
