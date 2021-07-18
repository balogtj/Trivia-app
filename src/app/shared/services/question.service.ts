import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { QuestionParamList } from '../models/question-param-list';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient) { }

  getQuestion(values: QuestionParamList): Observable<Question[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('amount', values.amount.toString());
    queryParams = queryParams.set('category', values.category.toString());
    queryParams = queryParams.set('encode', values.encode);
    queryParams = values.difficulty ? queryParams.set('difficulty', values.difficulty) : queryParams;
    queryParams = values.type ? queryParams.set('type', values.type) : queryParams;
    queryParams = values.token ? queryParams.set('token', values.token) : queryParams;


    return this.http.get<Question[]>(`${this.apiUrl}/api.php`, { params: queryParams });
  }
}
