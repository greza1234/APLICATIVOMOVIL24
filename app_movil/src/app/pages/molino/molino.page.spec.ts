import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MolinoPage } from './molino.page';

describe('MolinoPage', () => {
  let component: MolinoPage;
  let fixture: ComponentFixture<MolinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MolinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
