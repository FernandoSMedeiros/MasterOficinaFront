import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoComponent } from './ordemservico.component';

describe('OrdemservicoComponent', () => {
  let component: OrdemServicoComponent;
  let fixture: ComponentFixture<OrdemServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
