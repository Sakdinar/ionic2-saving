import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile-page/profile-page';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {
  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController,  public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    if (this.username == "admin" && this.password == "admin") {
      let userData = {
        id: 0,
        name: "admin",
        mail: "admin@admin.com"
      }
      this.storage.set("user", userData);
      this.navCtrl.setRoot(ProfilePage, {userData: userData});
    }
    else {
      this.showErrorToast();
    }
  }

  showErrorToast() {
      let toast = this.toastCtrl.create({
        message: 'Credenziali errate',
        duration: 4000,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        this.username = "";
        this.password = "";
      });

      toast.present();
    }
}
