import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTattoComponent } from './modal-tatto.component';

describe('ModalTattoComponent', () => {
  let component: ModalTattoComponent;
  let fixture: ComponentFixture<ModalTattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTattoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
