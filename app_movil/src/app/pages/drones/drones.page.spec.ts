import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DronesPage } from './drones.page';

describe('DronesPage', () => {
  let component: DronesPage;
  let fixture: ComponentFixture<DronesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DronesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
