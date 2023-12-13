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
import { InprogressComponent } from './inprogress/inprogress.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    PathFindingComponent,
    VisualizeComponent,
    InprogressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
      AccordionModule,
      AlertModule,
      ButtonsModule,
      CarouselModule,
      CollapseModule,
      BsDatepickerModule.forRoot(),
      BsDropdownModule,
      CollapseModule

  ],
  providers: [BsDatepickerConfig, BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
