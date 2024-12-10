import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PicadorasPage } from './picadoras.page';

describe('PicadorasPage', () => {
  let component: PicadorasPage;
  let fixture: ComponentFixture<PicadorasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PicadorasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
