import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarScriptComponent } from './cadastrar-script.component';

describe('CadastrarScriptComponent', () => {
  let component: CadastrarScriptComponent;
  let fixture: ComponentFixture<CadastrarScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
