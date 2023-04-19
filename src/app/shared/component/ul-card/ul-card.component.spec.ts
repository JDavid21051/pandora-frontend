import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlCardComponent } from './ul-card.component';

describe('UlCardComponent', () => {
  let component: UlCardComponent;
  let fixture: ComponentFixture<UlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
