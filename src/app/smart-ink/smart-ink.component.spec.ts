import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartInkComponent } from './smart-ink.component';

describe('SmartInkComponent', () => {
  let component: SmartInkComponent;
  let fixture: ComponentFixture<SmartInkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartInkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartInkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
