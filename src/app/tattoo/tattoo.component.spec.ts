import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooComponent } from './tattoo.component';

describe('TattooComponent', () => {
  let component: TattooComponent;
  let fixture: ComponentFixture<TattooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
