import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncerraTicketComponent } from './encerra-ticket.component';

describe('EncerraTicketComponent', () => {
  let component: EncerraTicketComponent;
  let fixture: ComponentFixture<EncerraTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncerraTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncerraTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
