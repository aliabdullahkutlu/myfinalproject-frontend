import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //apiye bağlanmak için yapılan bir hareket
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44308/api/products/getall';

  constructor(private httpClient: HttpClient) {}

  getProducts() :Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}