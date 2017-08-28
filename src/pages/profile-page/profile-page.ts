import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { LoginPage } from '../login-page/login-page';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage {
  userdata = {
    id: -1,
    name: "",
    mail: ""
  }
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, public storage:Storage) {
    
  }

  ionViewDidLoad() {
    this.storage.get('user').then((user) => {
      if (user != null) {
        this.userdata = user;
        console.log(this.storage.driver);  
      }
      else
        this.navCtrl.setRoot(LoginPage);
    });
  }

  doLogout() {
    let toast = this.toastCtrl.create({
        message: 'You have been disconnected',
        duration: 3000,
        position: 'center',
        cssClass: "toastClass"
      });

      toast.onDidDismiss(() => {
        this.storage.remove('user');
        this.navCtrl.setRoot(LoginPage);
      });

      toast.present();
  }
}
