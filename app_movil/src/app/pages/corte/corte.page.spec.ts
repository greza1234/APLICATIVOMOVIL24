import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CortePage } from './corte.page';

describe('CortePage', () => {
  let component: CortePage;
  let fixture: ComponentFixture<CortePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
