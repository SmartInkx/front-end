import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPercingComponent } from './modal-percing.component';

describe('ModalPercingComponent', () => {
  let component: ModalPercingComponent;
  let fixture: ComponentFixture<ModalPercingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPercingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPercingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
