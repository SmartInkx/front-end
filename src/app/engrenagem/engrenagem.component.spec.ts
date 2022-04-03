import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngrenagemComponent } from './engrenagem.component';

describe('EngrenagemComponent', () => {
  let component: EngrenagemComponent;
  let fixture: ComponentFixture<EngrenagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngrenagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngrenagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
