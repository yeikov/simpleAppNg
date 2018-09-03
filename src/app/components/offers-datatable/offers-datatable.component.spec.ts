
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDatatableComponent } from './offers-datatable.component';

describe('OffersDatatableComponent', () => {
  let component: OffersDatatableComponent;
  let fixture: ComponentFixture<OffersDatatableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
