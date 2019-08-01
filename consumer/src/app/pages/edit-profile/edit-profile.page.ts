import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../../shared/services/user.service';
import { User } from './../../shared/models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  public authUser = new User();

  constructor(
    private userService: UserService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.userService.getById(+localStorage.getItem('userId')).then((response: any) => {
      this.authUser = response[0];
      console.log(this.authUser);
    }).catch((err: any) => {
      console.log(err);
    })
  }

  updateProfile() {
    this.userService.updateById(this.authUser).then((response : any) => {
      this.navCtrl.navigateRoot('home');
    }).catch(err => {
      console.log(err);
    })
  }

  navBackToProfile() {
    this.navCtrl.navigateBack('profile');
  }

}
