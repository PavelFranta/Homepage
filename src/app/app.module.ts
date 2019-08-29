import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './tabs/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SocialPanelComponent } from './social-panel/social-panel.component';
import { AboutComponent } from './tabs/about/about.component';
import { KnowledgeComponent } from './tabs/knowledge/knowledge.component';
import { QuestionComponent } from './tabs/question/question.component';
import { PassionsComponent } from './tabs/passions/passions.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {ComponentsModule} from './tabs/components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SocialPanelComponent,
    AboutComponent,
    KnowledgeComponent,
    QuestionComponent,
    PassionsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
