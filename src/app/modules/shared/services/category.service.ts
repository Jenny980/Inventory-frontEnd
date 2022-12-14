import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  /**
   * 
   * get categories
   */
  getCategories(){
    const endPoint = `${base_url}/categories`;
    return this.http.get(endPoint);
  }
}
