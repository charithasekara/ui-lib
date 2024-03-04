// ui-lib.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component'; // Import the button component
import { InputFieldComponent } from '../input-field/input-field.component';

@NgModule({
  declarations: [
    ButtonComponent, // Declare the button component
    InputFieldComponent
  ],
  imports: [
    CommonModule, // add other modules that like material, forms, etc
  ],
  exports: [
    ButtonComponent, // Export the button component
    InputFieldComponent
  ]
})
export class UiLibModule { }
