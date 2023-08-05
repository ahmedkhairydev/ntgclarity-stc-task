import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Pipe({
  name: 'validationHandler',
  standalone: true
})
export class ValidationHandlerPipe implements PipeTransform {

  private destroy$ = new Subject<boolean>();
  private translate = inject(TranslateService);

  transform(value: any, customErrorMessage?: string): string {
    value = JSON.stringify(value);

    let finalMessage = '';
    let customMessage = '';
    const pattern = /"(.*?)"/;
    const matches = value.match(pattern).length === 0 ? (value.match(pattern)[0]).replace('"', '') : value.match(pattern)[1];

    if (matches === 'maxlength') {
      customMessage = JSON.parse(value).maxlength.requiredLength;
    } else if (matches === 'minlength') {
      customMessage = JSON.parse(value).minlength.requiredLength;
    } else if (matches === 'max') {
      customMessage = JSON.parse(value).max.max;
    } else if (matches === 'min') {
      customMessage = JSON.parse(value).min.min;
    }

    const customTranslate = customErrorMessage && matches === 'required' ? `${matches}_${customErrorMessage}` : matches;

    this.translate.get(`${customTranslate}_validation`).pipe(takeUntil(this.destroy$)).subscribe(translationWord => {
      finalMessage = translationWord + (customMessage ? '(' + customMessage + ')' : '');
    });

    return finalMessage;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
