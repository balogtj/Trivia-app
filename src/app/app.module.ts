import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppCdkModule } from './modules/app-cdk.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/scoreboard/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { NameComponent } from './components/name/name.component';
import { QuestionContainerComponent } from './components/quiz/question-container/question-container.component';
import { QueryDataService } from './shared/services/query-data.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { ScoreboardItemComponent } from './components/scoreboard/scoreboard-item/scoreboard-item.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard/scoreboard.component';
import { QuestionComponent } from './components/quiz/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NameComponent,
    SidebarComponent,
    QuestionContainerComponent,
    LoadingComponent,
    ScoreboardItemComponent,
    ScoreboardComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppCdkModule
  ],
  providers: [
    QueryDataService,
    { provide: 'API_URL', useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
