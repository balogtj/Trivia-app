import { Injectable } from '@angular/core';
import { QuestionParamList } from '../models/question-param-list';
import { EncodingType } from '../enums/encoding-type.enum';

@Injectable()
export class QueryDataService {
  quizes: QuestionParamList[] = [];
  token!: string;

  assignValuesToQuiz(category: number, difficulty: string, type: string): void {
    const newQuiz: QuestionParamList = {
      category,
      difficulty,
      type,
      amount: 5,
      encode: EncodingType.base64
    };
    this.quizes.push(newQuiz);
  }
}
