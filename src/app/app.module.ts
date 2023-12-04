import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PathFindingComponent } from './path-finding/path-finding.component';
import { VisualizeComponent } from './path-finding/visualize/visualize.component';
import { FormsModule } from '@angular/forms';
import { FourofourComponent } from './fourofour/fourofour.component';
import { InprogressComponent } from './inprogress/inprogress.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    PathFindingComponent,
    VisualizeComponent,
    FourofourComponent,
    InprogressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
