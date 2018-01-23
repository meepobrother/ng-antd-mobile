import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListModule, InputItemModule, RadioModule } from './antd-mobile/public_api';
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
    MeepoCommonModule,
    ReactiveFormsModule,
    RadioModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
