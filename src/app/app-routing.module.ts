import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NameComponent } from './components/name/name.component';
import { QuestionContainerComponent } from './components/quiz/question-container/question-container.component';
import { NamedUserGuard } from './shared/guards/named-user.guard';
import { UnnamedUserGuard } from './shared/guards/unnamed-user.guard';

const routes: Routes = [
  { path: 'name', component: NameComponent, canActivate: [NamedUserGuard] },
  { path: '', component: HomeComponent, canActivate: [UnnamedUserGuard] },
  { path: 'question', component: QuestionContainerComponent, canActivate: [UnnamedUserGuard]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
