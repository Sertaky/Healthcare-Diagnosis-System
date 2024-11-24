import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariaComponent } from './malaria.component';

describe('MalariaComponent', () => {
  let component: MalariaComponent;
  let fixture: ComponentFixture<MalariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MalariaComponent]
    });
    fixture = TestBed.createComponent(MalariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
