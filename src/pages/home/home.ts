import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile-page/profile-page';
import { LoginPage } from '../login-page/login-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage:Storage) {

  }

  ionViewDidLoad() {
    this.storage.get('user').then((user) => {
      if (user != null) 
        this.navCtrl.setRoot(ProfilePage, {userData: user});
      else
        this.navCtrl.setRoot(LoginPage);
    });
  }
}
