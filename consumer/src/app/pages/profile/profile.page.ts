import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from './../../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public authUser = new User();

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getById(+localStorage.getItem('userId')).then((response: any) => {
      this.authUser = response[0];
      console.log(this.authUser);
    }).catch((err: any) => {
      console.log(err);
    })
  }

}
