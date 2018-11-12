import { Component, OnInit, Input } from '@angular/core';
import template from './profile.component.html';
import style from './profile.component.css';

// import { ViewProfileComponent } from './view-profile.component';
// import { ProfileComponent } from './profile.component';
@Component({
  selector: 'mli-profile',
  template: template + '',
  styles: [style + '']
})
export class ProfileComponent implements OnInit {

  @Input() componentToUse: any = null;
 
  ngOnInit() {

  }
}