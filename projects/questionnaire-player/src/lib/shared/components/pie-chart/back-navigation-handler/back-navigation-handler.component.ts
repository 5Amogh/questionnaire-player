import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  template: '',
})
export class BackNavigationHandlerComponent {
  constructor(private outer: Router, private loc: Location) {}

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.handlePopState(event);
  }

  protected handlePopState(event: any) {
    const urlQueryParams = this.getQueryParams(event?.target?.location?.search);
    if (urlQueryParams) {
      this.outer.navigate(['/observation'], { queryParams: urlQueryParams });
    } else {
      this.outer.navigate(['/observation'], { queryParams: { type: 'listing' } });
    }
  }

  private getQueryParams(queryParams: string | null): any {
    const queryObj: any = {};

    if (!queryParams) {
      return null;
    }

    if (queryParams.startsWith('?')) {
      queryParams = queryParams.substring(1);
    }

    const queryArray = queryParams.split('&');
    queryArray.forEach((query: string) => {
      const [key, value] = query.split('=');
      queryObj[key] = decodeURIComponent(value || '');
    });

    return queryObj;
  }
}
