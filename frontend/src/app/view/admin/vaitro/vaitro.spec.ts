import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vaitro } from './vaitro';

describe('Vaitro', () => {
  let component: Vaitro;
  let fixture: ComponentFixture<Vaitro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vaitro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vaitro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
