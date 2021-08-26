import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarScriptComponent } from './listar-script.component';

describe('ListarScriptComponent', () => {
  let component: ListarScriptComponent;
  let fixture: ComponentFixture<ListarScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
