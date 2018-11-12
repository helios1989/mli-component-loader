import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MliComponentLoaderDirective } from './mli-component-loader.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MliComponentLoaderDirective],
  exports: [ MliComponentLoaderDirective ]
})
export class MliComponentLoaderModule { }
