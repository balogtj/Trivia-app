import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api_category.php`);
  }
}
