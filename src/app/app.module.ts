import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreProfileModule } from './ui-modules/profile/profile.module';
import { MliComponentLoaderModule } from './shared/mli-component-loader/mli-component-loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MliComponentLoaderModule,
    CoreProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
