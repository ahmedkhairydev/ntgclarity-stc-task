import { Component, inject } from '@angular/core';
import { TranslationService } from 'core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private translateService = inject(TranslationService);

  isEnglish = false;
  
  changeLanguage() {
    this.translateService.changeLanguage();
  }
}
