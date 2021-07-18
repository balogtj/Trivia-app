import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient) { }

  getToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api_token.php?command=request`);
  }

  resetToken(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api_token.php?command=reset&token=${token}`);
  }
}
