import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { FromToComponent } from './from-to/from-to.component';
import { FromToServiceService } from './from-to-service.service';


@NgModule({
  declarations: [
    AppComponent,
    FromToComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FromToServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
