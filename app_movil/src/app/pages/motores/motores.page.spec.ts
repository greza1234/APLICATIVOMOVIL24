import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotoresPage } from './motores.page';

describe('MotoresPage', () => {
  let component: MotoresPage;
  let fixture: ComponentFixture<MotoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
