import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageScreenComponent } from './my-page-screen.component';

describe('MyPageScreenComponent', () => {
  let component: MyPageScreenComponent;
  let fixture: ComponentFixture<MyPageScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPageScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
