import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarscriptComponent } from './listarscript.component';

describe('ListarscriptComponent', () => {
  let component: ListarscriptComponent;
  let fixture: ComponentFixture<ListarscriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarscriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
