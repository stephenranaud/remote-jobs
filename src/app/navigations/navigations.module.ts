import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationKeyswordComponent } from './navigation-keysword/navigation-keysword.component';
import { NavigationLocationComponent } from './navigation-location/navigation-location.component';



@NgModule({
  declarations: [
    NavigationKeyswordComponent,
    NavigationLocationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationKeyswordComponent,
    NavigationLocationComponent
  ]
})
export class NavigationsModule { }
