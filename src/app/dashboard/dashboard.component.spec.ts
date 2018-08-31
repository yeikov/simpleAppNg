/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { OfferSearchComponent } from '../offer-search/offer-search.component';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HEROES } from '../mock-offers';
import { OfferService } from '../services/offer.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let offerService;
  let getOffersSpy;

  beforeEach(async(() => {
    offerService = jasmine.createSpyObj('OfferService', ['getOffers']);
    getOffersSpy = offerService.getOffers.and.returnValue( of(HEROES) );
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        OfferSearchComponent 
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: offerService, useValue: offerService }
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Offers" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Offers');
  });

  it('should call offerService', async(() => {
    expect(getOffersSpy.calls.any()).toBe(true);
    }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));

});
 */