import { Injectable, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QueryParamsService implements OnDestroy {
  public entityId: any;
  public entityName: any;
  public observationId: any;
  public submissionId: any;
  public allowMultipleAssessemts: any;
  public reports: any;
  public id: any;
  public name: any;
  public entityType: any;
  public submissionNumber: any;
  public evidenceCode: any;
  public index: any;
  public type: any;
  private routerSubscription: Subscription;
  public isMultiple: any;
  public reportPage: any;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.parseQueryParams());
  }

  parseQueryParams() {
    let queryParams = this.getQueryParams(window.location.search);
    this.entityId = queryParams?.entityId;
    this.entityName = queryParams?.name;
    this.observationId = queryParams?.observationId;
    this.submissionId = queryParams?.submissionId;
    this.allowMultipleAssessemts = queryParams?.allowMultipleAssessemts;
    this.reports = queryParams?.reports;
    this.id = queryParams?.id;
    this.name = queryParams?.name;
    this.entityType = queryParams?.entityType;
    this.submissionNumber = queryParams?.submissionNumber;
    this.evidenceCode = queryParams?.evidenceCode;
    this.index = queryParams?.index;
    this.type = queryParams?.type;
    this.isMultiple = queryParams?.isMultiple;
    this.reportPage = queryParams?.reportPage;
  }

  getQueryParams(queryParams: any) {
    const queryObj: any = {}

    if (queryParams.startsWith('?')) {
      queryParams = queryParams.substring(1);
    }

    const queryArray = queryParams.split('&');

    queryArray.forEach((query: any) => {
      const [key, value] = query.split('=');
      queryObj[key] = value
    });
    return queryObj;
  }


  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
