import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { ValidationHandlerPipe } from 'shared/pipes';

@Component({
  selector: 'app-text-box',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, MatInputModule, ValidationHandlerPipe],
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent {
  @Input() formGroup!: FormGroup;
  @Input() controlName = '';
  @Input() label = '';
  @Input() inputType = 'textbox';
  @Input() contentType = 'text';
  @Input() appearance!: MatFormFieldAppearance;
  @Input() readonly = false;
  @Input() textareaRows = '';
}
