import { Component, inject } from '@angular/core';
import { TranslationService } from 'core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private translateService = inject(TranslationService);
}
