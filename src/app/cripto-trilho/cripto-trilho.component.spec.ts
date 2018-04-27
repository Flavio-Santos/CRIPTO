import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptoTrilhoComponent } from './cripto-trilho.component';

describe('CriptoTrilhoComponent', () => {
  let component: CriptoTrilhoComponent;
  let fixture: ComponentFixture<CriptoTrilhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriptoTrilhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptoTrilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
