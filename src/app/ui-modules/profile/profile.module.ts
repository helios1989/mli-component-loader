import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MliComponentLoaderModule } from '../../shared/mli-component-loader/mli-component-loader.module';
@NgModule({
  imports: [
    CommonModule,
    MliComponentLoaderModule
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
})
export class CoreProfileModule { }
