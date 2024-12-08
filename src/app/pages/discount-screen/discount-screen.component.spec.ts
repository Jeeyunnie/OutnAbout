import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountScreenComponent } from './discount-screen.component';

describe('DiscountScreenComponent', () => {
  let component: DiscountScreenComponent;
  let fixture: ComponentFixture<DiscountScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
