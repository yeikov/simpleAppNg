import { Component, OnInit } from '@angular/core';
import { Offer } from '../models/offer';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  offers: Offer[] = [];

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.getOffers();
  }

  getOffers(): void {
    this.offerService.getOffers().subscribe(offers => this.offers = offers.slice(0, 5));
    /* this.offers = this.offerService.getOfertas(); */
  }
}
