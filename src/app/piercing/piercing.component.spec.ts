import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercingComponent } from './piercing.component';

describe('PercingComponent', () => {
  let component: PercingComponent;
  let fixture: ComponentFixture<PercingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
