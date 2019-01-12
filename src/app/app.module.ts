import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReducidorPipe } from './reducidor.pipe';
import { ReducidorPipe2 } from './reducidor2.pipe';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [
		AppComponent,
		ReducidorPipe,
		ReducidorPipe2,
		FiltroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
