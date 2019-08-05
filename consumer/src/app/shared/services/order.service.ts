import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:5000/api/order/get')
        .subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        })
    })
  }

  getById(id: number) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/order/get/id', { "id": id })
        .subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        })
    })
  }

  getByUserId(id: number) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/order/get/userId', { "id": id })
        .subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        })
    })
  }

  create(is_round_trip: number, date_created: string,
    date_scheduled: string, user_id: number,
    merchant_id: number, parcelSize: string,
    num_parcels: number) {
    let orderCreds = {
      "is_round_trip": is_round_trip,
      "date_created": date_created,
      "date_scheduled": date_scheduled,
      "user_id": user_id,
      "merchant_id": merchant_id,
      "parcelSize": parcelSize,
      "num_parcels": num_parcels
    }
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/order/create', orderCreds)
        .subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        })
    })
  }
}
