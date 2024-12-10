import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiembraPage } from './siembra.page';

describe('SiembraPage', () => {
  let component: SiembraPage;
  let fixture: ComponentFixture<SiembraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SiembraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
