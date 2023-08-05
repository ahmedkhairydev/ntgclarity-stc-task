import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BaseModule } from 'shared/sub-modules/base/base.module';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, BaseModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  errorNumber = '401';
  private destroy$ = new Subject<boolean>();
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);


  ngOnInit(): void {
    const acceptiableStatuses = this.activeRoute.snapshot.data['acceptiableStatuses'] as string[];

    this.activeRoute.params.pipe(takeUntil(this.destroy$)).subscribe(data => {
      if (acceptiableStatuses.includes(data['errorNumber'])) {
        this.errorNumber = data['errorNumber'];
      } else {
        this.router.navigateByUrl('/error/404');
      }
    });
  }

  logout() {
    localStorage.clear();
  }

  /* when leaving the component */
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
