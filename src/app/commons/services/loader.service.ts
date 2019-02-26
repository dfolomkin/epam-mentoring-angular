import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
  isLoading = new Subject<boolean>();

  constructor() {}

  hideLoader(): void {
    this.isLoading.next(false);
  }

  showLoader(): void {
    this.isLoading.next(true);
  }
}
