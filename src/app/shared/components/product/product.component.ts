import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'core/interfaces';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DirectivesModule } from 'shared/sub-modules/directives/directives.module';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TranslateModule, DirectivesModule, MatTooltipModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  isEnglish = false;

  @Input() product!: Product;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  formatNumber(number: string) {
    return new Intl.NumberFormat(`${this.isEnglish ? 'en' : 'ar'}-EG`, { style: 'currency', currency: 'EGP' }).format(+number);
  }
}
