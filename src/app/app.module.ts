import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { SocialPanelComponent } from './social-panel/social-panel.component';
import { HomeCommentsComponent } from './home-comments/home-comments.component';
import { AboutComponent } from './about/about.component';
import { AboutCommentsComponent } from './about-comments/about-comments.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { KnowledgeCommentsComponent } from './knowledge-comments/knowledge-comments.component';
import { QuestionComponent } from './question/question.component';
import { QuestionCommentsComponent } from './question-comments/question-comments.component';
import { PassionsComponent } from './passions/passions.component';
import { PassionsCommentsComponent } from './passions-comments/passions-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SocialPanelComponent,
    HomeCommentsComponent,
    AboutComponent,
    AboutCommentsComponent,
    KnowledgeComponent,
    KnowledgeCommentsComponent,
    QuestionComponent,
    QuestionCommentsComponent,
    PassionsComponent,
    PassionsCommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
