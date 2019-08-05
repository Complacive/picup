import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:5000/api/product/getAll')
        .subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getById(id: number) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/product/getById', { 'id': id })
        .subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  update(product: Product) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/product/update', product)
      .subscribe((response) => {
        resolve(response);
      }, (err) => {
        reject(err);
      })
    });
  }
}
