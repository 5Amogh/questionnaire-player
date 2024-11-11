import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  template: '',
})
export class BackNavigationHandlerComponent {

  constructor(public outer: Router, private loc?: Location){}

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    console.log("first")
    this.handlePopState(event);

  }

  protected handlePopState(event: any) {
    let urlQueryParams = this.getQueryParams(event.target.location.search)
    console.log("urlQueryParams",urlQueryParams)
    if(urlQueryParams){
    //   this.outer.navigate(event.target.location.pathname, urlQueryParams)
    this.outer.navigate(['/observation'], { queryParams: urlQueryParams })

    }else{
      this.loc?.back()
    }
  }

  getQueryParams(queryParams:any){
    const queryObj: any = {}

    if(!queryParams){
      return null
    }
    if (queryParams.startsWith('?')) {
      queryParams = queryParams.substring(1);
    }

    const queryArray = queryParams.split('&');

    queryArray.forEach((query:any) => {
        const [key, value] = query.split('=');
        queryObj[key] = value 
    });
    return queryObj;
  }

}