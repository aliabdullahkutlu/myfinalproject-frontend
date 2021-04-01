import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //apiye bağlanmak için yapılan bir hareket
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'https://localhost:44308/api/categories/getall';

  constructor(private httpClient: HttpClient) {}

  getCategories() :Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
