import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1ScreenComponent } from './product-1-screen.component';

describe('Product1ScreenComponent', () => {
  let component: Product1ScreenComponent;
  let fixture: ComponentFixture<Product1ScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product1ScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product1ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
