import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadTicketComponent } from './cad-ticket.component';

describe('CadTicketComponent', () => {
  let component: CadTicketComponent;
  let fixture: ComponentFixture<CadTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
