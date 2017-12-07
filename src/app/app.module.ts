import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ThrilledPavelComponent } from './thrilled-pavel/thrilled-pavel.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { SocialPanelComponent } from './social-panel/social-panel.component';
import { LookingForJobCommentsPanelComponent } from './looking-for-job-comments-panel/looking-for-job-comments-panel.component';
import { AboutComponent } from './about/about.component';
import { AboutPavelPanelComponent } from './about-pavel-panel/about-pavel-panel.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { KnowledgeCommentsComponent } from './knowledge-comments/knowledge-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ThrilledPavelComponent,
    HomeComponent,
    SocialPanelComponent,
    LookingForJobCommentsPanelComponent,
    AboutComponent,
    AboutPavelPanelComponent,
    KnowledgeComponent,
    KnowledgeCommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    Angular2FontawesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
