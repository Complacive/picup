import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NavController } from '@ionic/angular';
import { User } from '../models/user';
import { BaseURL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authUser: User;

  constructor(
    private httpClient: HttpClient,
    private NavCtrl: NavController
  ) { }

  createUser(authUser: User) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(BaseURL + 'user/create', authUser)
        .subscribe(
          (response) => {
            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(BaseURL + 'user/get')
        .subscribe(
          (response) => {
            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
    });
  }

  getUserById(userId) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(BaseURL + 'user/' + userId)
        .subscribe(
          (response) => {
            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
    });
  }

  deleteUserById(userId) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(BaseURL + 'user/delete/' + userId)
        .subscribe(
          (response) => {
            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
    });
  }

  // ?????
  updateUser(authUser) {
    return new Promise((resolve, reject) => {
      // this.httpClient
      //   .get(BaseURL + 'user/update/' + authUser.id)
      //   .subscribe(
      //     (response) => {
      //       resolve(response);

      //     },
      //     (err) => {
      //       reject(err);
      //     }
      //   )
      this.authUser.set_name("new name");
      this.authUser.set_email("new email");
      this.authUser.set_password("new password");

    });
  }
}
