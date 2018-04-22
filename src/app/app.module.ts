import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BoardModule } from './feature/board/board.module';
import { HttpService } from './core/services/http.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BoardModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
