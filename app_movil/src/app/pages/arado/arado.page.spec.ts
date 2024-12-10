import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AradoPage } from './arado.page';

describe('AradoPage', () => {
  let component: AradoPage;
  let fixture: ComponentFixture<AradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
