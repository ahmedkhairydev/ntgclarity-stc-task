import { Component, inject } from '@angular/core';
import { LoadingService } from 'core/services/loading/loading.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isLoading = inject(LoadingService).isLoading;
}
