import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrderPage } from './current-order.page';

describe('CurrentOrderPage', () => {
  let component: CurrentOrderPage;
  let fixture: ComponentFixture<CurrentOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
