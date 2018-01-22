import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListModule, InputItemModule } from './antd-mobile/public_api';
import { MeepoCommonModule } from 'meepo-common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ListModule, 
    InputItemModule,
    MeepoCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
