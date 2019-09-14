import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFarmerComponent } from './product-farmer.component';

describe('ProductFarmerComponent', () => {
  let component: ProductFarmerComponent;
  let fixture: ComponentFixture<ProductFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
