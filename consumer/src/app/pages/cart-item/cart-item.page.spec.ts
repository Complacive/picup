import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemPage } from './cart-item.page';

describe('CartItemPage', () => {
  let component: CartItemPage;
  let fixture: ComponentFixture<CartItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
