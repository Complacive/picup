import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { User } from '../../shared/models/user'
import { AuthService } from '../../shared/services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public newUser = new User();

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  navToLogin() {
    this.navCtrl.navigateBack('login');
  }

  registerUser() {
    this.newUser.set_new_user('true');
    
    this.authService.registerUser(this.newUser).then(res => {
      const testId = +localStorage.getItem('userId');
      console.log(testId);
      this.navCtrl.navigateForward('home');
    }).catch(err => {
      alert(err);
    });
  }

}
