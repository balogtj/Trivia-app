import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DifficultyType } from 'src/app/shared/enums/difficulty-type.enum';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category';
import { Router } from '@angular/router';
import { QueryDataService } from 'src/app/shared/services/query-data.service';
import { QuestionType } from 'src/app/shared/enums/question-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  difficulties = Object.values(DifficultyType);
  types = Object.values(QuestionType);
  categories!: Category[];
  quizForm!: FormGroup;
  isCallOngoing = true;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    public data: QueryDataService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.quizForm = this.fb.group({
      difficulty: [this.data?.quizes.length === 0 ? this.difficulties[0] : this.data.quizes[this.data.quizes.length - 1].difficulty],
      type: [this.data?.quizes.length === 0 ? this.types[0] : this.data.quizes[this.data.quizes.length - 1].type],
      category: ['', Validators.required],
      amount: [5, Validators.required]
    });
    // use a resolve guard here
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      response => {
        this.categories = response.trivia_categories;
        this.setCategory(this.categories[0].id);
        this.isCallOngoing = false;
      }
    );
  }

  checkSelectedDifficulty(difficulty: string | any): boolean {
    return this.quizForm.controls.difficulty.value === difficulty;
  }

  checkSelectedType(type: string | any): boolean {
    return this.quizForm.controls.type.value === type;
  }

  checkSelectedCategory(categoryId: number | any): boolean {
    return this.quizForm.controls.category.value === categoryId;
  }

  setCategory(categoryId: any): void {
    this.quizForm.patchValue({
      category: categoryId
    });
  }

  startQuiz(): void {
    const category = this.quizForm.controls.category.value;
    const difficulty = this.quizForm.controls.difficulty.value;
    const type = this.quizForm.controls.type.value;

    this.data.assignValuesToQuiz(category, difficulty, type);
    this.router.navigate(['/question']);
  }

}
