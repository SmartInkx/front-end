import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosPiercingComponent } from './agendamentos-piercing.component';

describe('AgendamentosPiercingComponent', () => {
  let component: AgendamentosPiercingComponent;
  let fixture: ComponentFixture<AgendamentosPiercingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosPiercingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentosPiercingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
