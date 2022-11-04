import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { IniciarComponent } from './pages/iniciar/iniciar.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarComponent
  ],
  imports: [
    BrowserModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
