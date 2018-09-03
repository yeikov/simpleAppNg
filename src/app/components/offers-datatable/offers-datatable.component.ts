import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { OffersDatatableDataSource } from './offers-datatable-datasource';
import { OfferService } from '../../services/offer.service';
import { Offer } from '../../models/offer';

@Component({
  selector: 'app-offers-datatable',
  templateUrl: './offers-datatable.component.html',
  styleUrls: ['./offers-datatable.component.css']
})
export class OffersDatatableComponent implements OnInit {
  constructor (private offerS: OfferService){
};
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource: OffersDatatableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    //this.offerS.getOffers().subscribe(offers => this.data = offers);
    this.dataSource = new OffersDatatableDataSource(this.paginator, this.sort);
    
    this.offerS.getOffers().subscribe(offers => this.dataSource.data = offers);
  }
}
