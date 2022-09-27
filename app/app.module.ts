import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { FooterComponent } from './sharerpages/footer/footer.component';
import { NavbarComponent } from './sharerpages/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HelpComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
