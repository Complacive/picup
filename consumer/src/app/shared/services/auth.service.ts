import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(authUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.post('http://localhost:5000/api/auth/login', authUser, { headers }).subscribe((response: any) => {
        localStorage.setItem('userId', response.id);
        resolve(response);
      },
        (err) => {
          reject(err);
        });

    });
  }
  
  registerUser(newUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.post('http://localhost:5000/api/auth/register', newUser, {headers})
      .subscribe(
        (response: any) => {
          localStorage.setItem('userId', response);
          console.log('accepting body');
          resolve(response);
        },
        (err) => {
          console.log('rejecting body');
          reject(err);
        }
      )
    })
  }
  
}
