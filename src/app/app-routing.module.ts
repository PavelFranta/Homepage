import { PassionsComponent } from './tabs/passions/passions.component';
import { QuestionComponent } from './tabs/question/question.component';
import { AboutComponent } from './tabs/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './tabs/home/home.component';
import { KnowledgeComponent } from './tabs/knowledge/knowledge.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'passions', component: PassionsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
