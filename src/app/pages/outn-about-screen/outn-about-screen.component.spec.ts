import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutnAboutScreenComponent } from './outn-about-screen.component';

describe('OutnAboutScreenComponent', () => {
  let component: OutnAboutScreenComponent;
  let fixture: ComponentFixture<OutnAboutScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutnAboutScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutnAboutScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
