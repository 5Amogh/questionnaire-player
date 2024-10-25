import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-observation-details',
  templateUrl: './observation-details.component.html',
  styleUrls: ['./observation-details.component.css', '../listing/listing.component.scss']
})
export class ObservationDetailsComponent  implements OnInit{
  entityId: any;
  entityName: any;
  entityToAdd: any;

  constructor(private router:Router){}

  ngOnInit(): void {
    const queryParams = this.router.parseUrl(this.router.url).queryParams
    this.entityId = queryParams['id'];
    this.entityName = queryParams['name'];
    this.entityToAdd = queryParams['entityType'];
  }
}
