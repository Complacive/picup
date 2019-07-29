import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  get(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/product',
        { params: new HttpParams().set('id', id + '') })
        .subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  update(product: Product) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/product/update', product)
      .subscribe((response) => {
        resolve(response);
      }, (err) => {
        reject(err);
      })
    });
  }
}
